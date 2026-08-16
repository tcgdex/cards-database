import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { getCardMarketStatus } from './libs/providers/cardmarket'
import { getTCGPlayerStatus } from './libs/providers/tcgplayer'

const START_TIME = new Date()

const langsToName: Record<string, string> = {
	'zh-cn': 'Chinese (simplified)',
	'zh-tw': 'Chinese (traditionnal)',
	'nl': 'Dutch',
	'en': 'English',
	'fr': 'French',
	'de': 'German',
	'id': 'Indonesian',
	'it': 'Italian',
	'ja': 'Japanese',
	'ko': 'Korean',
	'pl': 'Polish',
	'pt': 'Portuguese (Brazil)',
	'pt-pt': 'Portuguese (Portugal)',
	'ru': 'Russian',
	'es': 'Spanish',
	'th': 'Thai',
	'es-mx': 'Spanish (Latin America)',
}

const asiaLangs = new Set(['ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'])

const GENERATED = path.resolve(__dirname, '../generated')

// Load per-language stats at startup
type LangStats = { count: number; total: number; images: number; sets: Record<string, Record<string, { name: string; count: number; images: number }>> }
const langStats: Record<string, LangStats> = {}
for (const lang of Object.keys(langsToName)) {
	try {
		langStats[lang] = JSON.parse(fs.readFileSync(path.join(GENERATED, lang, 'stats.json'), 'utf8'))
	} catch {
		// language not generated on this server
	}
}

// Load series names
const serieNames: Record<string, string> = {}
try {
	const series: Array<{ id: string; name: string }> = JSON.parse(
		fs.readFileSync(path.join(GENERATED, 'en', 'series.json'), 'utf8')
	)
	for (const s of series) serieNames[s.id] = s.name
} catch { }

// Map set IDs to serie IDs using en stats structure
const setToSerie: Record<string, string> = {}
if (langStats.en) {
	for (const [serieId, sets] of Object.entries(langStats.en.sets)) {
		for (const setId of Object.keys(sets)) {
			setToSerie[setId] = serieId
		}
	}
}

// Per-language card ID sets (for translation completeness)
const langCardIds: Record<string, Set<string>> = {}
for (const lang of Object.keys(langStats)) {
	try {
		const lc: any[] = JSON.parse(fs.readFileSync(path.join(GENERATED, lang, 'cards.json'), 'utf8'))
		langCardIds[lang] = new Set(lc.map((c: any) => c.id?.toLowerCase()))
	} catch { }
}

// Compute pricing completeness from en/cards.json at startup + index cards by set
type CardEntry = { id: string; localId: string; name: string; image: string | null; variants_detailed: any[] }
type SetPricing = { name: string; total: number; withCardmarket: number; withTcgplayer: number }
const pricing: { total: number; withCardmarket: number; withTcgplayer: number; bySet: Record<string, SetPricing> } = {
	total: 0,
	withCardmarket: 0,
	withTcgplayer: 0,
	bySet: {},
}
const cardsBySet: Record<string, CardEntry[]> = {}
try {
	const cards: any[] = JSON.parse(fs.readFileSync(path.join(GENERATED, 'en', 'cards.json'), 'utf8'))
	pricing.total = cards.length
	for (const card of cards) {
		const variants: any[] = card.variants_detailed ?? []
		const hasCm = variants.some((v) => v.thirdParty?.cardmarket != null)
		const hasTp = variants.some((v) => v.thirdParty?.tcgplayer != null)
		if (hasCm) pricing.withCardmarket++
		if (hasTp) pricing.withTcgplayer++
		const setId: string | undefined = card.set?.id
		if (setId) {
			if (!pricing.bySet[setId]) {
				pricing.bySet[setId] = { name: card.set.name, total: 0, withCardmarket: 0, withTcgplayer: 0 }
			}
			pricing.bySet[setId].total++
			if (hasCm) pricing.bySet[setId].withCardmarket++
			if (hasTp) pricing.bySet[setId].withTcgplayer++
			if (!cardsBySet[setId]) cardsBySet[setId] = []
			cardsBySet[setId].push({ id: card.id, localId: card.localId, name: card.name, image: card.image ?? null, variants_detailed: variants })
		}
	}
} catch (err) {
	console.error('[status] failed to compute pricing stats:', err)
}

const REGIONS = [
	{ id: 'eu1', label: 'Global', note: 'Except eu2/eu3/na1/na2', url: 'https://api.eu1.tcgdex.net/ping' },
	{ id: 'eu2', label: 'France', note: '', url: 'https://api.eu2.tcgdex.net/ping' },
	{ id: 'eu3', label: 'Germany', note: '', url: 'https://api.eu3.tcgdex.net/ping' },
	{ id: 'na1', label: 'Americas', note: 'North & South America, excl. US', url: 'https://api.na1.tcgdex.net/ping' },
	{ id: 'na2', label: 'United States', note: '', url: 'https://api.na2.tcgdex.net/ping' },
]

export default express.Router()

	// JSON data endpoint — consumed by the status HTML page
	.get('/data', (_req, res) => {
		const now = Date.now()
		res.json({
			server: {
				startedAt: START_TIME.toISOString(),
				uptime: Math.floor((now - START_TIME.getTime()) / 1000),
			},
			providers: {
				cardmarket: getCardMarketStatus(),
				tcgplayer: getTCGPlayerStatus(),
			},
			regions: REGIONS,
			languages: Object.fromEntries(
				Object.entries(langStats).map(([lang, s]) => [lang, {
					name: langsToName[lang],
					group: asiaLangs.has(lang) ? 'asia' : 'inter',
					count: s.count,
					total: s.total,
					images: s.images,
				}])
			),
			pricing: {
				total: pricing.total,
				withCardmarket: pricing.withCardmarket,
				withTcgplayer: pricing.withTcgplayer,
				sets: Object.fromEntries(
					Object.entries(pricing.bySet).map(([setId, s]) => [setId, {
						...s,
						serie: setToSerie[setId] ?? null,
						serieName: serieNames[setToSerie[setId]] ?? null,
					}])
				),
			},
			sets: Object.fromEntries(
				Object.entries(langStats.en?.sets ?? {}).map(([serieId, sets]) => [serieId, {
					name: serieNames[serieId] ?? serieId,
					sets: Object.fromEntries(
						Object.entries(sets).map(([setId, setEn]) => [setId, {
							name: setEn.name,
							total: setEn.count,
							langs: Object.fromEntries(
								Object.entries(langStats)
									.filter(([, ls]) => ls.sets[serieId]?.[setId])
									.map(([lang, ls]) => [lang, {
										count: ls.sets[serieId][setId].count,
										images: ls.sets[serieId][setId].images,
									}])
							),
						}])
					),
				}])
			),
		})
	})

	// Per-set card completeness drill-down
	.get('/data/sets/:setId', (req, res) => {
		const setId = req.params.setId.toLowerCase()
		const cards = cardsBySet[setId]
		if (!cards) {
			res.status(404).json({ error: 'set not found' })
			return
		}
		const availableLangs = Object.keys(langCardIds)
		res.json(cards.map((card) => {
			const variants = card.variants_detailed
			const hasCm = variants.some((v) => v.thirdParty?.cardmarket != null)
			const hasTp = variants.some((v) => v.thirdParty?.tcgplayer != null)
			const missingLangs = availableLangs.filter((l) => l !== 'en' && !langCardIds[l]?.has(card.id.toLowerCase()))
			return {
				id: card.id,
				localId: card.localId,
				name: card.name,
				missing: {
					image: card.image === null,
					cardmarket: !hasCm,
					tcgplayer: !hasTp,
					langs: missingLangs,
				},
			}
		}))
	})

	// GitHub SVG badge — unchanged behaviour, new data source
	.get('/github.svg', (_req, res): void => {
		const langs = langStats
		const interLangs = Object.entries(langs).filter(([l]) => !asiaLangs.has(l))
		const asiaEntries = Object.entries(langs).filter(([l]) => asiaLangs.has(l))

		const totalInter = interLangs.reduce((acc, [, s]) => {
			acc.count += s.count; acc.total += s.total; acc.images += s.images; return acc
		}, { count: 0, total: 0, images: 0 })
		const totalAsia = asiaEntries.reduce((acc, [, s]) => {
			acc.count += s.count; acc.total += s.total; acc.images += s.images; return acc
		}, { count: 0, total: 0, images: 0 })

		const col = (lang: string) => langs[lang] ?? { count: 0, total: 1, images: 0 }
		const pct = (a: number, b: number) => (100 * a / (b || 1)).toFixed(2)

		res.setHeader('Content-Type', 'image/svg+xml')
		res.send(`<svg width="1429" height="726" viewBox="0 0 1429 726" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1429" height="726" fill="white"/>
<path d="M0 16C0 7.16344 7.16344 0 16 0H1413C1421.84 0 1429 7.16344 1429 16V47C1429 55.8366 1421.84 63 1413 63H16C7.1634 63 0 55.8366 0 47V16Z" fill="#EEEEEE"/>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="136.409" y="37.5">Dutch</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="252.227" y="37.5">English</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="374.545" y="37.5">French</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="490.364" y="37.5">German</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="616.182" y="37.5">Italian</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="740.5" y="37.5">Polish</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="839.763" y="27.5">Portuguese&#10;</tspan><tspan x="856.138" y="47.5">(Brazil)</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="960.582" y="27.5">Portuguese&#10;</tspan><tspan x="965.238" y="47.5">(Portugal)</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1095.45" y="37.5">Russian</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1215.77" y="37.5">Spanish</tspan></text>
<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1325.59" y="37.5">Total Inter</tspan></text>
<rect width="1429" height="100" transform="translate(0 63)" fill="#FAFAFA"/>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="25.3359" y="109">Cards&#10;</tspan><tspan x="13.7266" y="129">Progress</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="129.616" y="89">${col('nl').count}&#10;</tspan><tspan x="149.506" y="109">of&#10;</tspan><tspan x="129.616" y="129">${col('nl').total}&#10;</tspan><tspan x="132.858" y="149">(${pct(col('nl').count, col('nl').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="250.707" y="89">${col('en').count}&#10;</tspan><tspan x="270.597" y="109">of&#10;</tspan><tspan x="250.707" y="129">${col('en').total}&#10;</tspan><tspan x="253.949" y="149">(${pct(col('en').count, col('en').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="371.798" y="89">${col('fr').count}&#10;</tspan><tspan x="391.688" y="109">of&#10;</tspan><tspan x="371.798" y="129">${col('fr').total}&#10;</tspan><tspan x="375.04" y="149">(${pct(col('fr').count, col('fr').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="492.888" y="89">${col('de').count}&#10;</tspan><tspan x="512.779" y="109">of&#10;</tspan><tspan x="492.888" y="129">${col('de').total}&#10;</tspan><tspan x="496.131" y="149">(${pct(col('de').count, col('de').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="613.979" y="89">${col('it').count}&#10;</tspan><tspan x="633.87" y="109">of&#10;</tspan><tspan x="613.979" y="129">${col('it').total}&#10;</tspan><tspan x="617.222" y="149">(${pct(col('it').count, col('it').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="89">${col('pl').count}&#10;</tspan><tspan x="754.961" y="109">of&#10;</tspan><tspan x="735.07" y="129">${col('pl').total}&#10;</tspan><tspan x="738.312" y="149">(${pct(col('pl').count, col('pl').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="856.161" y="89">${col('pt').count}&#10;</tspan><tspan x="876.052" y="109">of&#10;</tspan><tspan x="856.161" y="129">${col('pt').total}&#10;</tspan><tspan x="859.403" y="149">(${pct(col('pt').count, col('pt').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="977.252" y="89">${col('pt-pt').count}&#10;</tspan><tspan x="997.143" y="109">of&#10;</tspan><tspan x="977.252" y="129">${col('pt-pt').total}&#10;</tspan><tspan x="980.494" y="149">(${pct(col('pt-pt').count, col('pt-pt').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1098.34" y="89">${col('ru').count}&#10;</tspan><tspan x="1118.23" y="109">of&#10;</tspan><tspan x="1098.34" y="129">${col('ru').total}&#10;</tspan><tspan x="1101.59" y="149">(${pct(col('ru').count, col('ru').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1219.43" y="89">${col('es').count}&#10;</tspan><tspan x="1239.32" y="109">of&#10;</tspan><tspan x="1219.43" y="129">${col('es').total}&#10;</tspan><tspan x="1222.68" y="149">(${pct(col('es').count, col('es').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1340.52" y="89">${totalInter.count}&#10;</tspan><tspan x="1360.42" y="109">of&#10;</tspan><tspan x="1340.52" y="129">${totalInter.total}&#10;</tspan><tspan x="1343.77" y="149">(${pct(totalInter.count, totalInter.total)}%)</tspan></text>
<rect width="1429" height="100" transform="translate(0 163)" fill="#FAFAFA"/>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="17.5391" y="209">Images&#10;</tspan><tspan x="13.7266" y="229">Progress</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="129.616" y="189">${col('nl').images}&#10;</tspan><tspan x="149.506" y="209">of&#10;</tspan><tspan x="129.616" y="229">${col('nl').total}&#10;</tspan><tspan x="132.858" y="249">(${pct(col('nl').images, col('nl').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="250.707" y="189">${col('en').images}&#10;</tspan><tspan x="270.597" y="209">of&#10;</tspan><tspan x="250.707" y="229">${col('en').total}&#10;</tspan><tspan x="253.949" y="249">(${pct(col('en').images, col('en').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="371.798" y="189">${col('fr').images}&#10;</tspan><tspan x="391.688" y="209">of&#10;</tspan><tspan x="371.798" y="229">${col('fr').total}&#10;</tspan><tspan x="375.04" y="249">(${pct(col('fr').images, col('fr').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="492.888" y="189">${col('de').images}&#10;</tspan><tspan x="512.779" y="209">of&#10;</tspan><tspan x="492.888" y="229">${col('de').total}&#10;</tspan><tspan x="496.131" y="249">(${pct(col('de').images, col('de').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="613.979" y="189">${col('it').images}&#10;</tspan><tspan x="633.87" y="209">of&#10;</tspan><tspan x="613.979" y="229">${col('it').total}&#10;</tspan><tspan x="617.222" y="249">(${pct(col('it').images, col('it').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="189">${col('pl').images}&#10;</tspan><tspan x="754.961" y="209">of&#10;</tspan><tspan x="735.07" y="229">${col('pl').total}&#10;</tspan><tspan x="738.312" y="249">(${pct(col('pl').images, col('pl').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="856.161" y="189">${col('pt').images}&#10;</tspan><tspan x="876.052" y="209">of&#10;</tspan><tspan x="856.161" y="229">${col('pt').total}&#10;</tspan><tspan x="859.403" y="249">(${pct(col('pt').images, col('pt').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="977.252" y="189">${col('pt-pt').images}&#10;</tspan><tspan x="997.143" y="209">of&#10;</tspan><tspan x="977.252" y="229">${col('pt-pt').total}&#10;</tspan><tspan x="980.494" y="249">(${pct(col('pt-pt').images, col('pt-pt').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1098.34" y="189">${col('ru').images}&#10;</tspan><tspan x="1118.23" y="209">of&#10;</tspan><tspan x="1098.34" y="229">${col('ru').total}&#10;</tspan><tspan x="1101.59" y="249">(${pct(col('ru').images, col('ru').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1219.43" y="189">${col('es').images}&#10;</tspan><tspan x="1239.32" y="209">of&#10;</tspan><tspan x="1219.43" y="229">${col('es').total}&#10;</tspan><tspan x="1222.68" y="249">(${pct(col('es').images, col('es').total)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1340.52" y="189">${totalInter.images}&#10;</tspan><tspan x="1360.42" y="209">of&#10;</tspan><tspan x="1340.52" y="229">${totalInter.total}&#10;</tspan><tspan x="1343.77" y="249">(${pct(totalInter.images, totalInter.total)}%)</tspan></text>
<rect width="1429" height="100" transform="translate(0 263)" fill="#FAFAFA"/>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="28.5859" y="309">Total&#10;</tspan><tspan x="13.7266" y="329">Progress</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="129.616" y="289">${col('nl').count + col('nl').images}&#10;</tspan><tspan x="149.506" y="309">of&#10;</tspan><tspan x="129.616" y="329">${col('nl').total * 2}&#10;</tspan><tspan x="132.858" y="349">(${pct(col('nl').count + col('nl').images, col('nl').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="250.707" y="289">${col('en').count + col('en').images}&#10;</tspan><tspan x="270.597" y="309">of&#10;</tspan><tspan x="250.707" y="329">${col('en').total * 2}&#10;</tspan><tspan x="253.949" y="349">(${pct(col('en').count + col('en').images, col('en').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="371.798" y="289">${col('fr').count + col('fr').images}&#10;</tspan><tspan x="391.688" y="309">of&#10;</tspan><tspan x="371.798" y="329">${col('fr').total * 2}&#10;</tspan><tspan x="375.04" y="349">(${pct(col('fr').count + col('fr').images, col('fr').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="492.888" y="289">${col('de').count + col('de').images}&#10;</tspan><tspan x="512.779" y="309">of&#10;</tspan><tspan x="492.888" y="329">${col('de').total * 2}&#10;</tspan><tspan x="496.131" y="349">(${pct(col('de').count + col('de').images, col('de').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="613.979" y="289">${col('it').count + col('it').images}&#10;</tspan><tspan x="633.87" y="309">of&#10;</tspan><tspan x="613.979" y="329">${col('it').total * 2}&#10;</tspan><tspan x="617.222" y="349">(${pct(col('it').count + col('it').images, col('it').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="289">${col('pl').count + col('pl').images}&#10;</tspan><tspan x="754.961" y="309">of&#10;</tspan><tspan x="735.07" y="329">${col('pl').total * 2}&#10;</tspan><tspan x="738.312" y="349">(${pct(col('pl').count + col('pl').images, col('pl').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="856.161" y="289">${col('pt').count + col('pt').images}&#10;</tspan><tspan x="876.052" y="309">of&#10;</tspan><tspan x="856.161" y="329">${col('pt').total * 2}&#10;</tspan><tspan x="859.403" y="349">(${pct(col('pt').count + col('pt').images, col('pt').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="977.252" y="289">${col('pt-pt').count + col('pt-pt').images}&#10;</tspan><tspan x="997.143" y="309">of&#10;</tspan><tspan x="977.252" y="329">${col('pt-pt').total * 2}&#10;</tspan><tspan x="980.494" y="349">(${pct(col('pt-pt').count + col('pt-pt').images, col('pt-pt').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1098.34" y="289">${col('ru').count + col('ru').images}&#10;</tspan><tspan x="1118.23" y="309">of&#10;</tspan><tspan x="1098.34" y="329">${col('ru').total * 2}&#10;</tspan><tspan x="1101.59" y="349">(${pct(col('ru').count + col('ru').images, col('ru').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1219.43" y="289">${col('es').count + col('es').images}&#10;</tspan><tspan x="1239.32" y="309">of&#10;</tspan><tspan x="1219.43" y="329">${col('es').total * 2}&#10;</tspan><tspan x="1222.68" y="349">(${pct(col('es').count + col('es').images, col('es').total * 2)}%)</tspan></text>
<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1340.52" y="289">${totalInter.count + totalInter.images}&#10;</tspan><tspan x="1360.42" y="309">of&#10;</tspan><tspan x="1340.52" y="329">${totalInter.total * 2}&#10;</tspan><tspan x="1343.77" y="349">(${pct(totalInter.count + totalInter.images, totalInter.total * 2)}%)</tspan></text>
</svg>`)
	})

	// Status HTML page — fetches /status/data client-side and renders it
	.get(['/', ''], (_req, res): void => {
		res.setHeader('Content-Type', 'text/html; charset=utf-8')
		res.send(STATUS_HTML)
	})

const STATUS_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TCGdex Status</title>
<style>
:root {
  --bg: #ffffff;
  --bg2: #f8fafc;
  --fg: #0f172a;
  --fg2: #64748b;
  --border: #e2e8f0;
  --card: #ffffff;
  --pill: #f1f5f9;
  --pill-fg: #475569;
  --pill-active: #0f172a;
  --pill-active-fg: #ffffff;
  --ok: #16a34a;
  --ok-bg: #dcfce7;
  --warn: #d97706;
  --warn-bg: #fef3c7;
  --err: #dc2626;
  --err-bg: #fee2e2;
  --neutral: #94a3b8;
  --bar-bg: #e2e8f0;
  --shadow: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0f172a;
    --bg2: #1e293b;
    --fg: #f8fafc;
    --fg2: #94a3b8;
    --border: #334155;
    --card: #1e293b;
    --pill: #334155;
    --pill-fg: #94a3b8;
    --pill-active: #f8fafc;
    --pill-active-fg: #0f172a;
    --ok: #4ade80;
    --ok-bg: #14532d;
    --warn: #fbbf24;
    --warn-bg: #451a03;
    --err: #f87171;
    --err-bg: #450a0a;
    --bar-bg: #334155;
    --shadow: 0 1px 3px rgba(0,0,0,.3);
  }
}
:root[data-theme="dark"] {
  --bg: #0f172a; --bg2: #1e293b; --fg: #f8fafc; --fg2: #94a3b8;
  --border: #334155; --card: #1e293b; --pill: #334155; --pill-fg: #94a3b8;
  --pill-active: #f8fafc; --pill-active-fg: #0f172a;
  --ok: #4ade80; --ok-bg: #14532d; --warn: #fbbf24; --warn-bg: #451a03;
  --err: #f87171; --err-bg: #450a0a; --bar-bg: #334155;
  --shadow: 0 1px 3px rgba(0,0,0,.3);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg); color: var(--fg); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; }
a { color: inherit; }

.page { max-width: 1400px; margin: 0 auto; padding: 24px 16px 64px; }

header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; }
header h1 { font-size: 20px; font-weight: 700; }
.uptime-badge { font-size: 12px; color: var(--fg2); background: var(--bg2); border: 1px solid var(--border); border-radius: 20px; padding: 4px 12px; }

/* Filter bar */
.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.filter-btn {
  background: var(--pill); color: var(--pill-fg); border: none; border-radius: 20px;
  padding: 6px 14px; font-size: 13px; font-weight: 500; cursor: pointer; transition: background .15s, color .15s;
}
.filter-btn.active { background: var(--pill-active); color: var(--pill-active-fg); }
.filter-btn:hover:not(.active) { background: var(--border); }

/* Sub-filter bar (within a section) */
.sub-filters { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
.sub-btn {
  background: var(--pill); color: var(--pill-fg); border: 1px solid var(--border); border-radius: 6px;
  padding: 4px 10px; font-size: 12px; cursor: pointer; transition: background .1s;
}
.sub-btn.active { background: var(--pill-active); color: var(--pill-active-fg); border-color: var(--pill-active); }

section { margin-bottom: 40px; }
section[hidden] { display: none; }
.section-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 16px; }
.section-header h2 { font-size: 16px; font-weight: 700; }
.section-header .meta { font-size: 12px; color: var(--fg2); }

/* Cards grid */
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
.card {
  background: var(--card); border: 1px solid var(--border); border-radius: 10px;
  padding: 14px 16px; box-shadow: var(--shadow);
}
.card-label { font-size: 12px; color: var(--fg2); margin-bottom: 4px; }
.card-value { font-size: 15px; font-weight: 600; }
.card-sub { font-size: 11px; color: var(--fg2); margin-top: 2px; }

/* Region cards */
.region-card { display: flex; flex-direction: column; gap: 6px; }
.region-status { display: flex; align-items: center; gap: 8px; }
.dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; background: var(--neutral); }
.dot.ok { background: var(--ok); }
.dot.err { background: var(--err); }
.dot.checking { background: var(--neutral); animation: pulse 1s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
.region-name { font-weight: 600; font-size: 14px; }
.region-note { font-size: 11px; color: var(--fg2); }
.region-latency { font-size: 12px; color: var(--fg2); }
.region-uptime { font-size: 11px; color: var(--fg2); }

/* Provider row */
.providers { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; margin-top: 16px; }
.provider-card { padding: 14px 16px; }
.provider-name { font-size: 13px; font-weight: 700; margin-bottom: 8px; }
.provider-row { display: flex; justify-content: space-between; font-size: 12px; color: var(--fg2); padding: 2px 0; }
.provider-row span:last-child { color: var(--fg); font-weight: 500; }

/* Progress bar */
.progress-wrap { display: flex; align-items: center; gap: 8px; }
.bar { flex: 1; height: 6px; background: var(--bar-bg); border-radius: 3px; overflow: hidden; min-width: 60px; }
.bar-fill { height: 100%; border-radius: 3px; transition: width .3s; }
.pct-label { font-size: 12px; font-weight: 600; min-width: 42px; text-align: right; }

/* Table */
.table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 10px; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th { background: var(--bg2); font-weight: 600; padding: 10px 12px; text-align: left; white-space: nowrap; border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 1; }
td { padding: 9px 12px; border-bottom: 1px solid var(--border); vertical-align: middle; white-space: nowrap; }
tr:last-child td { border-bottom: none; }
tr:hover td { background: var(--bg2); }
.lang-group-header td { background: var(--bg2); font-weight: 700; font-size: 12px; color: var(--fg2); text-transform: uppercase; letter-spacing: .05em; padding: 6px 12px; }

.tag { display: inline-block; font-size: 11px; padding: 1px 7px; border-radius: 10px; font-weight: 500; }
.tag-ok { background: var(--ok-bg); color: var(--ok); }
.tag-warn { background: var(--warn-bg); color: var(--warn); }
.tag-err { background: var(--err-bg); color: var(--err); }

/* Sets accordion */
.serie-block { margin-bottom: 12px; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.serie-toggle { width: 100%; text-align: left; background: var(--bg2); border: none; padding: 12px 16px; cursor: pointer; font-size: 14px; font-weight: 700; color: var(--fg); display: flex; justify-content: space-between; align-items: center; }
.serie-toggle:hover { background: var(--border); }
.serie-toggle .chevron { transition: transform .2s; font-size: 12px; }
.serie-toggle.open .chevron { transform: rotate(180deg); }
.serie-body { display: none; overflow-x: auto; }
.serie-body.open { display: block; }
.set-expand { background: none; border: 1px solid var(--border); border-radius: 4px; color: var(--fg2); cursor: pointer; font-size: 10px; padding: 1px 5px; margin-right: 6px; transition: transform .15s; vertical-align: middle; }
.set-expand.open { transform: rotate(90deg); }
.set-detail-body { padding: 12px 16px; background: var(--bg2); border-top: 1px solid var(--border); }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; margin-top: 8px; }
.card-item { background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; font-size: 12px; }
.card-item .card-id { color: var(--fg2); font-size: 11px; }
.card-item .badges { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
.badge { padding: 2px 7px; border-radius: 99px; font-size: 10px; font-weight: 600; }
.badge.ok { background: #d1fae5; color: #065f46; }
.badge.ok.dark { background: #064e3b; color: #6ee7b7; }
.badge.miss { background: #fee2e2; color: #991b1b; }
.badge.miss.dark { background: #7f1d1d; color: #fca5a5; }
.search-wrap { margin-bottom: 16px; }
.search-wrap input { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg); color: var(--fg); font-size: 13px; }
.search-wrap input:focus { outline: 2px solid var(--pill-active); }
.loading { color: var(--fg2); font-size: 13px; padding: 24px; text-align: center; }

/* Pricing filter bar */
.pricing-filter { margin-bottom: 12px; display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.pricing-filter label { font-size: 12px; color: var(--fg2); }
</style>
</head>
<body>
<div class="page">
  <header>
    <h1>TCGdex Status</h1>
    <span class="uptime-badge" id="uptime-badge">Loading…</span>
  </header>

  <nav class="filters" id="filter-bar">
    <button class="filter-btn active" data-section="all">All</button>
    <button class="filter-btn" data-section="servers">Servers</button>
    <button class="filter-btn" data-section="languages">Languages</button>
    <button class="filter-btn" data-section="pricing">Pricing</button>
    <button class="filter-btn" data-section="sets">Sets</button>
  </nav>

  <section id="sec-servers">
    <div class="section-header"><h2>Server Status</h2></div>
    <div class="cards" id="regions-grid"><div class="loading">Checking servers…</div></div>
    <div class="providers" id="providers-grid"></div>
  </section>

  <section id="sec-languages">
    <div class="section-header">
      <h2>Language Progress</h2>
      <span class="meta" id="lang-meta"></span>
    </div>
    <div class="sub-filters">
      <button class="sub-btn active" data-group="all">All</button>
      <button class="sub-btn" data-group="inter">International</button>
      <button class="sub-btn" data-group="asia">Asia</button>
    </div>
    <div class="table-wrap" id="lang-table-wrap"><div class="loading">Loading…</div></div>
  </section>

  <section id="sec-pricing">
    <div class="section-header">
      <h2>Pricing Coverage</h2>
      <span class="meta" id="pricing-meta"></span>
    </div>
    <div class="cards" id="pricing-summary" style="margin-bottom:16px"></div>
    <div class="pricing-filter">
      <label>Show sets:</label>
      <button class="sub-btn active" data-pfilter="all">All</button>
      <button class="sub-btn" data-pfilter="incomplete">Incomplete only</button>
      <button class="sub-btn" data-pfilter="complete">Complete only</button>
      <label style="margin-left:8px">Provider:</label>
      <button class="sub-btn active" data-pprovider="both">Both</button>
      <button class="sub-btn" data-pprovider="cardmarket">CardMarket</button>
      <button class="sub-btn" data-pprovider="tcgplayer">TCGPlayer</button>
    </div>
    <div class="table-wrap" id="pricing-table-wrap"><div class="loading">Loading…</div></div>
  </section>

  <section id="sec-sets">
    <div class="section-header"><h2>Set Completion</h2></div>
    <div class="search-wrap"><input type="text" id="set-search" placeholder="Filter sets by name or ID…"></div>
    <div id="sets-container"><div class="loading">Loading…</div></div>
  </section>
</div>

<script>
(async () => {
  const DATA_URL = '/status/data'
  let data = null

  // ── helpers ──────────────────────────────────────────────────────────────
  function pct(a, b) { return b ? (100 * a / b) : 0 }
  function pctStr(a, b) { return pct(a, b).toFixed(1) + '%' }
  function barColor(p) {
    if (p >= 100) return '#16a34a'
    if (p >= 75)  return '#65a30d'
    if (p >= 50)  return '#d97706'
    return '#dc2626'
  }
  function bar(a, b, label) {
    const p = pct(a, b)
    return \`<div class="progress-wrap">
      <div class="bar"><div class="bar-fill" style="width:\${Math.min(p,100)}%;background:\${barColor(p)}"></div></div>
      <span class="pct-label" style="color:\${barColor(p)}">\${label ?? pctStr(a,b)}</span>
    </div>\`
  }
  function tag(p) {
    const cls = p >= 100 ? 'tag-ok' : p >= 75 ? 'tag-warn' : 'tag-err'
    return \`<span class="tag \${cls}">\${p.toFixed(1)}%</span>\`
  }
  function fmtUptime(s) {
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60)
    if (d) return \`\${d}d \${h}h\`
    if (h) return \`\${h}h \${m}m\`
    return \`\${m}m \${s % 60}s\`
  }
  function fmtDate(iso) {
    if (!iso) return '—'
    const d = new Date(iso)
    return d.toLocaleString()
  }
  function fmtAge(iso) {
    if (!iso) return '—'
    const age = (Date.now() - new Date(iso).getTime()) / 1000
    return fmtUptime(Math.floor(age)) + ' ago'
  }

  // ── section filters ───────────────────────────────────────────────────────
  const sections = { servers: 'sec-servers', languages: 'sec-languages', pricing: 'sec-pricing', sets: 'sec-sets' }
  document.getElementById('filter-bar').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn')
    if (!btn) return
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    const sel = btn.dataset.section
    Object.values(sections).forEach(id => {
      document.getElementById(id).hidden = sel !== 'all' && !Object.keys(sections).some(k => k === sel && sections[k] === id)
    })
  })

  // ── fetch data ────────────────────────────────────────────────────────────
  try { data = await fetch(DATA_URL).then(r => r.json()) } catch {
    document.querySelector('.page').innerHTML = '<p style="color:var(--err);padding:24px">Failed to load status data.</p>'
    return
  }

  // ── uptime badge ──────────────────────────────────────────────────────────
  document.getElementById('uptime-badge').textContent = 'Up ' + fmtUptime(data.server.uptime)

  // ── regions ───────────────────────────────────────────────────────────────
  const grid = document.getElementById('regions-grid')
  grid.innerHTML = data.regions.map(r => \`
    <div class="card region-card" id="region-\${r.id}">
      <div class="region-status">
        <div class="dot checking" id="dot-\${r.id}"></div>
        <span class="region-name">\${r.label}</span>
      </div>
      \${r.note ? \`<div class="region-note">\${r.note}</div>\` : ''}
      <div class="region-latency" id="lat-\${r.id}">Checking…</div>
    </div>
  \`).join('')

  data.regions.forEach(async r => {
    const dot = document.getElementById('dot-' + r.id)
    const lat = document.getElementById('lat-' + r.id)
    try {
      const t0 = performance.now()
      const res = await fetch(r.url, { mode: 'cors', cache: 'no-store' })
      const ms = Math.round(performance.now() - t0)
      dot.className = 'dot ' + (res.ok ? 'ok' : 'err')
      lat.textContent = res.ok ? ms + ' ms' : 'Error ' + res.status
    } catch {
      dot.className = 'dot err'
      lat.textContent = 'Unreachable'
    }
  })

  // ── providers ─────────────────────────────────────────────────────────────
  const cm = data.providers.cardmarket
  const tp = data.providers.tcgplayer
  document.getElementById('providers-grid').innerHTML = \`
    <div class="card provider-card">
      <div class="provider-name">CardMarket</div>
      <div class="provider-row"><span>Data updated</span><span>\${fmtDate(cm.lastUpdate)}</span></div>
      <div class="provider-row"><span>Last fetched</span><span>\${fmtAge(cm.lastFetch)}</span></div>
      <div class="provider-row"><span>Entries loaded</span><span>\${cm.entriesLoaded.toLocaleString()}</span></div>
    </div>
    <div class="card provider-card">
      <div class="provider-name">TCGPlayer</div>
      <div class="provider-row"><span>Last fetched</span><span>\${fmtAge(tp.lastFetch)}</span></div>
      <div class="provider-row"><span>Products loaded</span><span>\${tp.productsLoaded.toLocaleString()}</span></div>
    </div>
    <div class="card provider-card">
      <div class="provider-name">Server</div>
      <div class="provider-row"><span>Started</span><span>\${fmtDate(data.server.startedAt)}</span></div>
      <div class="provider-row"><span>Uptime</span><span>\${fmtUptime(data.server.uptime)}</span></div>
    </div>
  \`

  // ── language table ────────────────────────────────────────────────────────
  const langs = data.languages
  let langGroup = 'all'
  const langOrder = Object.keys(langs)

  function renderLangTable() {
    const rows = langOrder.filter(l => langGroup === 'all' || langs[l].group === langGroup)
    const totalCount = rows.reduce((s, l) => s + langs[l].count, 0)
    const totalTotal = rows.reduce((s, l) => s + langs[l].total, 0)
    const totalImages = rows.reduce((s, l) => s + langs[l].images, 0)
    document.getElementById('lang-meta').textContent =
      rows.length + ' languages · ' + totalCount.toLocaleString() + ' of ' + totalTotal.toLocaleString() + ' cards'

    document.getElementById('lang-table-wrap').innerHTML = \`<table>
      <thead><tr>
        <th>Language</th>
        <th>Cards</th><th>Card %</th>
        <th>Images</th><th>Image %</th>
        <th>Missing cards</th><th>Missing images</th>
      </tr></thead>
      <tbody>
        \${rows.map(l => {
          const s = langs[l]
          const cp = pct(s.count, s.total)
          const ip = pct(s.images, s.total)
          return \`<tr>
            <td><b>\${s.name}</b></td>
            <td>\${s.count.toLocaleString()} / \${s.total.toLocaleString()}</td>
            <td>\${bar(s.count, s.total)}</td>
            <td>\${s.images.toLocaleString()} / \${s.total.toLocaleString()}</td>
            <td>\${bar(s.images, s.total)}</td>
            <td>\${(s.total - s.count).toLocaleString()}</td>
            <td>\${(s.total - s.images).toLocaleString()}</td>
          </tr>\`
        }).join('')}
        <tr style="font-weight:700;border-top:2px solid var(--border)">
          <td>Total</td>
          <td>\${totalCount.toLocaleString()} / \${totalTotal.toLocaleString()}</td>
          <td>\${bar(totalCount, totalTotal)}</td>
          <td>\${totalImages.toLocaleString()} / \${totalTotal.toLocaleString()}</td>
          <td>\${bar(totalImages, totalTotal)}</td>
          <td>\${(totalTotal - totalCount).toLocaleString()}</td>
          <td>\${(totalTotal - totalImages).toLocaleString()}</td>
        </tr>
      </tbody>
    </table>\`
  }
  renderLangTable()

  document.querySelector('.sub-filters').addEventListener('click', e => {
    const btn = e.target.closest('.sub-btn')
    if (!btn || !btn.dataset.group) return
    document.querySelectorAll('[data-group]').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    langGroup = btn.dataset.group
    renderLangTable()
  })

  // ── pricing ───────────────────────────────────────────────────────────────
  const pr = data.pricing
  const cmPct = pct(pr.withCardmarket, pr.total)
  const tpPct = pct(pr.withTcgplayer, pr.total)
  document.getElementById('pricing-meta').textContent = pr.total.toLocaleString() + ' total cards (English)'
  document.getElementById('pricing-summary').innerHTML = \`
    <div class="card">
      <div class="card-label">CardMarket coverage</div>
      <div class="card-value">\${pr.withCardmarket.toLocaleString()} / \${pr.total.toLocaleString()}</div>
      <div class="card-sub">\${bar(pr.withCardmarket, pr.total)}</div>
    </div>
    <div class="card">
      <div class="card-label">TCGPlayer coverage</div>
      <div class="card-value">\${pr.withTcgplayer.toLocaleString()} / \${pr.total.toLocaleString()}</div>
      <div class="card-sub">\${bar(pr.withTcgplayer, pr.total)}</div>
    </div>
    <div class="card">
      <div class="card-label">Missing CardMarket</div>
      <div class="card-value" style="color:var(--err)">\${(pr.total - pr.withCardmarket).toLocaleString()}</div>
      <div class="card-sub">cards without pricing</div>
    </div>
    <div class="card">
      <div class="card-label">Missing TCGPlayer</div>
      <div class="card-value" style="color:var(--err)">\${(pr.total - pr.withTcgplayer).toLocaleString()}</div>
      <div class="card-sub">cards without pricing</div>
    </div>
  \`

  let pricingFilter = 'all'
  let pricingProvider = 'both'
  const pricingSets = Object.entries(pr.sets)

  function renderPricingTable() {
    let rows = pricingSets
    if (pricingFilter === 'incomplete') {
      rows = rows.filter(([, s]) =>
        (pricingProvider !== 'tcgplayer' && s.withCardmarket < s.total) ||
        (pricingProvider !== 'cardmarket' && s.withTcgplayer < s.total)
      )
    } else if (pricingFilter === 'complete') {
      rows = rows.filter(([, s]) =>
        (pricingProvider === 'tcgplayer' || s.withCardmarket >= s.total) &&
        (pricingProvider === 'cardmarket' || s.withTcgplayer >= s.total)
      )
    }

    const showCm = pricingProvider !== 'tcgplayer'
    const showTp = pricingProvider !== 'cardmarket'

    document.getElementById('pricing-table-wrap').innerHTML = \`<table>
      <thead><tr>
        <th>Set</th><th>Serie</th><th>Total</th>
        \${showCm ? '<th>CardMarket</th><th>CM %</th>' : ''}
        \${showTp ? '<th>TCGPlayer</th><th>TP %</th>' : ''}
      </tr></thead>
      <tbody>
        \${rows.map(([id, s]) => \`<tr>
          <td><b>\${s.name}</b> <span style="color:var(--fg2);font-size:11px">\${id}</span></td>
          <td>\${s.serieName ?? s.serie ?? '—'}</td>
          <td>\${s.total}</td>
          \${showCm ? \`<td>\${s.withCardmarket} / \${s.total}</td><td>\${bar(s.withCardmarket, s.total)}</td>\` : ''}
          \${showTp ? \`<td>\${s.withTcgplayer} / \${s.total}</td><td>\${bar(s.withTcgplayer, s.total)}</td>\` : ''}
        </tr>\`).join('')}
      </tbody>
    </table>\`
  }
  renderPricingTable()

  document.querySelector('.pricing-filter').addEventListener('click', e => {
    const btn = e.target.closest('.sub-btn')
    if (!btn) return
    if (btn.dataset.pfilter) {
      document.querySelectorAll('[data-pfilter]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      pricingFilter = btn.dataset.pfilter
    }
    if (btn.dataset.pprovider) {
      document.querySelectorAll('[data-pprovider]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      pricingProvider = btn.dataset.pprovider
    }
    renderPricingTable()
  })

  // ── sets ──────────────────────────────────────────────────────────────────
  const seriesData = data.sets
  const langKeys = Object.keys(data.languages)
  let setSearchTerm = ''

  function renderSets() {
    const container = document.getElementById('sets-container')
    const serieEntries = Object.entries(seriesData)
    const term = setSearchTerm.toLowerCase()

    const blocks = serieEntries.map(([serieId, serie]) => {
      const setEntries = Object.entries(serie.sets).filter(([setId, s]) =>
        !term || s.name.toLowerCase().includes(term) || setId.toLowerCase().includes(term) || serie.name.toLowerCase().includes(term)
      )
      if (!setEntries.length) return ''

      const rows = setEntries.map(([setId, s]) => {
        const cells = langKeys.map(l => {
          const ld = s.langs[l]
          if (!ld) return '<td class="na" style="background:var(--bg2);color:var(--fg2);text-align:center">—</td><td style="background:var(--bg2)"></td>'
          const cp = pct(ld.count, s.total || 1)
          const ip = pct(ld.images, s.total || 1)
          return \`<td>\${tag(cp)}</td><td>\${tag(ip)}</td>\`
        }).join('')
        const colspan = 1 + langKeys.length * 2
        return \`<tr class="set-row" data-setid="\${setId}">
          <td>
            <button class="set-expand" onclick="toggleSetDetail('\${setId}', this)" title="Show card detail">▶</button>
            <b>\${s.name}</b><br><span style="color:var(--fg2);font-size:11px">\${setId} · \${s.total} cards</span>
          </td>
          \${cells}
        </tr>
        <tr class="set-detail-row" id="detail-\${setId}" style="display:none">
          <td colspan="\${colspan}" style="padding:0">
            <div class="set-detail-body" id="detail-body-\${setId}"></div>
          </td>
        </tr>\`
      }).join('')

      const langHeaders = langKeys.map(l => \`<th colspan="2">\${langs[l]?.name ?? l}</th>\`).join('')
      const subHeaders = langKeys.map(() => '<th>Cards</th><th>Images</th>').join('')

      return \`<div class="serie-block" data-serie="\${serieId}">
        <button class="serie-toggle" onclick="toggleSerie(this)">
          <span>\${serie.name} <span style="font-size:12px;font-weight:400;color:var(--fg2)">\${serieId}</span></span>
          <span class="chevron">▼</span>
        </button>
        <div class="serie-body">
          <table>
            <thead>
              <tr><th rowspan="2">Set</th>\${langHeaders}</tr>
              <tr>\${subHeaders}</tr>
            </thead>
            <tbody>\${rows}</tbody>
          </table>
        </div>
      </div>\`
    }).join('')

    container.innerHTML = blocks || '<div class="loading">No sets match your search.</div>'
  }
  renderSets()

  document.getElementById('set-search').addEventListener('input', e => {
    setSearchTerm = e.target.value
    renderSets()
  })

  window.toggleSerie = function(btn) {
    btn.classList.toggle('open')
    btn.nextElementSibling.classList.toggle('open')
  }

  const setDetailCache = {}
  window.toggleSetDetail = async function(setId, btn) {
    const detailRow = document.getElementById('detail-' + setId)
    const body = document.getElementById('detail-body-' + setId)
    const isOpen = detailRow.style.display !== 'none'
    detailRow.style.display = isOpen ? 'none' : ''
    btn.classList.toggle('open', !isOpen)
    if (isOpen || setDetailCache[setId]) {
      if (!isOpen) body.innerHTML = setDetailCache[setId]
      return
    }
    body.innerHTML = '<div class="loading">Loading cards…</div>'
    try {
      const data = await fetch('/status/data/sets/' + setId).then(r => r.json())
      const dark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme:dark)').matches)
      const dc = dark ? ' dark' : ''
      const b = (label, ok) => \`<span class="badge \${ok ? 'ok' : 'miss'}\${dc}">\${label}</span>\`
      const cards = data.map(c => {
        const m = c.missing
        const badges = [
          b('Image', !m.image),
          b('CardMarket', !m.cardmarket),
          b('TCGPlayer', !m.tcgplayer),
          ...m.langs.map(l => b(l, false)),
        ].join('')
        return \`<div class="card-item">
          <div class="card-id">\${c.localId}</div>
          <div style="font-weight:600;margin-top:2px">\${c.name}</div>
          <div class="badges">\${badges}</div>
        </div>\`
      }).join('')
      const missing = data.filter(c => c.missing.image || c.missing.cardmarket || c.missing.tcgplayer || c.missing.langs.length).length
      const html = \`<div style="margin-bottom:8px;font-size:12px;color:var(--fg2)">\${data.length} cards · \${missing} with missing data</div><div class="card-grid">\${cards}</div>\`
      setDetailCache[setId] = html
      body.innerHTML = html
    } catch(e) {
      body.innerHTML = '<div style="color:red">Failed to load card data</div>'
    }
  }

})()
</script>
</body>
</html>`
