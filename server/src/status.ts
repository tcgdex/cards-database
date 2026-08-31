import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const START_TIME = new Date()

const git = (cmd: string) => {
	try { return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim() } catch { return null }
}
let GIT_VERSION = 'dev'
let GIT_COMMIT  = 'unknown'
try {
	const info = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../generated/git-info.json'), 'utf8'))
	GIT_VERSION = info.version ?? 'dev'
	GIT_COMMIT  = info.commit  ?? 'unknown'
} catch {
	// dev environment — git-info.json not built yet, query git directly
	GIT_VERSION = git('git describe --tags --abbrev=0') ?? 'dev'
	GIT_COMMIT  = git('git rev-parse --short=7 HEAD')   ?? 'unknown'
}

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

// Cache Asian language series names
const asiaSerieNames: Record<string, Record<string, string>> = {}
for (const lang of asiaLangs) {
	if (!langStats[lang]) continue
	try {
		const series: Array<{id: string; name: string}> = JSON.parse(
			fs.readFileSync(path.join(GENERATED, lang, 'series.json'), 'utf8')
		)
		asiaSerieNames[lang] = Object.fromEntries(series.map((s: any) => [s.id, s.name]))
	} catch {}
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
type CardEntry = { id: string; localId: string; name: string; image: boolean; hasCm: boolean; hasTp: boolean }
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
			cardsBySet[setId].push({ id: card.id, localId: card.localId, name: card.name, image: card.image != null, hasCm, hasTp })
		}
	}
} catch (err) {
	console.error('[status] failed to compute pricing stats:', err)
}


export default express.Router()

	// JSON data endpoint — consumed by the status HTML page
	.get('/data', (_req, res) => {
		const now = Date.now()
		res.json({
			server: {
				startedAt: START_TIME.toISOString(),
				uptime: Math.floor((now - START_TIME.getTime()) / 1000),
				version: GIT_VERSION,
				commit: GIT_COMMIT,
			},
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
			const missingLangs = availableLangs.filter((l) => l !== 'en' && !langCardIds[l]?.has(card.id.toLowerCase()))
			return {
				id: card.id,
				localId: card.localId,
				name: card.name,
				missing: {
					image: !card.image,
					cardmarket: !card.hasCm,
					tcgplayer: !card.hasTp,
					langs: missingLangs,
				},
			}
		}))
	})

	// Per-language Asia set hierarchy
	.get('/data/asia/:lang', (req, res) => {
		const lang = req.params.lang
		if (!asiaLangs.has(lang) || !langStats[lang]) {
			res.status(404).json({ error: 'language not found' })
			return
		}
		const ls = langStats[lang]
		res.json({
			lang,
			name: langsToName[lang],
			count: ls.count,
			total: ls.total,
			images: ls.images,
			series: Object.fromEntries(
				Object.entries(ls.sets).map(([serieId, sets]) => [serieId, {
					name: asiaSerieNames[lang]?.[serieId] ?? serieId,
					sets: Object.fromEntries(
						Object.entries(sets as Record<string, {name: string; count: number; images: number}>).map(([setId, s]) => [setId, {
							name: s.name,
							count: s.count,
							images: s.images,
						}])
					),
				}])
			),
		})
	})

	// GitHub SVG badge — dynamically generated from available language data
	.get('/github.svg', (_req, res): void => {
		const interEntries = Object.entries(langStats)
			.filter(([l]) => !asiaLangs.has(l))
			.sort(([a], [b]) => a.localeCompare(b))
		const asiaEntries = Object.entries(langStats).filter(([l]) => asiaLangs.has(l))

		const sumStats = (entries: [string, LangStats][]) => entries.reduce(
			(acc, [, s]) => { acc.count += s.count; acc.total += s.total; acc.images += s.images; return acc },
			{ count: 0, total: 0, images: 0 }
		)
		const totalInter = sumStats(interEntries)
		const totalAsia = sumStats(asiaEntries)
		const hasAsia = asiaEntries.length > 0

		const pct = (a: number, b: number) => `${(100 * a / (b || 1)).toFixed(2)}%`

		// Layout
		const LABEL_W = 110
		const COL_W = 120
		const HEADER_H = 63
		const ROW_H = 100

		type SvgCol = { label: string; count: number; total: number; images: number }
		const cols: SvgCol[] = [
			...interEntries.map(([l, s]) => ({ label: langsToName[l] ?? l, count: s.count, total: s.total, images: s.images })),
			{ label: 'Total Inter', ...totalInter },
			...(hasAsia ? [{ label: 'Total Asia', ...totalAsia }] : []),
		]

		const svgW = LABEL_W + cols.length * COL_W
		const LANG_ROWS = 3
		const PRICING_ROWS = 2
		const svgH = HEADER_H + (LANG_ROWS + PRICING_ROWS) * ROW_H
		const cx = (i: number) => LABEL_W + i * COL_W + Math.round(COL_W / 2)
		const lx = Math.round(LABEL_W / 2)
		const dataCenter = Math.round(LABEL_W + (svgW - LABEL_W) / 2)

		// Split long names at '(' or at a space near the middle
		const splitName = (name: string): [string, string | null] => {
			const pi = name.indexOf('(')
			if (pi > 0) return [name.slice(0, pi).trim(), name.slice(pi)]
			if (name.length > 11) {
				const mid = Math.floor(name.length / 2)
				const sp = name.lastIndexOf(' ', mid + 3)
				if (sp > 0) return [name.slice(0, sp), name.slice(sp + 1)]
			}
			return [name, null]
		}

		// Header
		const headerTexts = cols.map((col, i) => {
			const [l1, l2] = splitName(col.label)
			const x = cx(i)
			if (l2) {
				return `<text fill="#757575" font-family="Arial" font-size="14" font-weight="600" text-anchor="middle"><tspan x="${x}" y="24">${l1}</tspan><tspan x="${x}" dy="18">${l2}</tspan></text>`
			}
			return `<text fill="#757575" font-family="Arial" font-size="14" font-weight="600" text-anchor="middle" x="${x}" y="37">${l1}</text>`
		}).join('\n')

		// Data rows: Cards Progress, Images Progress, Total Progress
		const dataRows: Array<{ label: [string, string]; get: (c: SvgCol) => [number, number] }> = [
			{ label: ['Cards',  'Progress'], get: c => [c.count,              c.total    ] },
			{ label: ['Images', 'Progress'], get: c => [c.images,             c.total    ] },
			{ label: ['Total',  'Progress'], get: c => [c.count + c.images,   c.total * 2] },
		]

		const rowsHtml = dataRows.map(({ label, get }, ri) => {
			const ry = HEADER_H + ri * ROW_H
			const bg = `<rect width="${svgW}" height="${ROW_H}" y="${ry}" fill="${ri % 2 === 0 ? '#FAFAFA' : '#FFFFFF'}"/>`
			const rowLabel = `<text fill="#212121" font-family="Arial" font-size="14" font-weight="600" text-anchor="middle"><tspan x="${lx}" y="${ry + 37}">${label[0]}</tspan><tspan x="${lx}" dy="20">${label[1]}</tspan></text>`
			const cells = cols.map((col, ci) => {
				const [num, den] = get(col)
				const x = cx(ci)
				return `<text fill="#212121" font-family="Arial" font-size="14" font-weight="600" text-anchor="middle"><tspan x="${x}" y="${ry + 26}">${num}</tspan><tspan x="${x}" dy="20">of</tspan><tspan x="${x}" dy="20">${den}</tspan><tspan x="${x}" dy="20">(${pct(num, den)})</tspan></text>`
			}).join('\n')
			return `${bg}\n${rowLabel}\n${cells}`
		}).join('\n')

		// Pricing rows (EN-global, single centered cell)
		const pricingBase = HEADER_H + LANG_ROWS * ROW_H
		const pricingRowsHtml = [
			{ label: ['CardMarket', 'Coverage'], num: pricing.withCardmarket, den: pricing.total },
			{ label: ['TCGPlayer',  'Coverage'], num: pricing.withTcgplayer,  den: pricing.total },
		].map(({ label, num, den }, ri) => {
			const ry = pricingBase + ri * ROW_H
			const bg = `<rect width="${svgW}" height="${ROW_H}" y="${ry}" fill="${ri % 2 === 0 ? '#FAFAFA' : '#FFFFFF'}"/>`
			const rowLabel = `<text fill="#212121" font-family="Arial" font-size="14" font-weight="600" text-anchor="middle"><tspan x="${lx}" y="${ry + 37}">${label[0]}</tspan><tspan x="${lx}" dy="20">${label[1]}</tspan></text>`
			const cell = `<text fill="#212121" font-family="Arial" font-size="14" font-weight="600" text-anchor="middle"><tspan x="${dataCenter}" y="${ry + 26}">${num}</tspan><tspan x="${dataCenter}" dy="20">of</tspan><tspan x="${dataCenter}" dy="20">${den}</tspan><tspan x="${dataCenter}" dy="20">(${pct(num, den)})</tspan></text>`
			return `${bg}\n${rowLabel}\n${cell}`
		}).join('\n')

		// Separator between language rows and pricing rows
		const separator = `<rect width="${svgW}" height="2" y="${pricingBase}" fill="#DDDDDD"/>`

		// Grid lines
		const vLines = Array.from({ length: cols.length + 1 }, (_, i) =>
			`<line x1="${LABEL_W + i * COL_W}" y1="${HEADER_H}" x2="${LABEL_W + i * COL_W}" y2="${pricingBase}" stroke="#EEEEEE" stroke-width="1"/>`
		).join('\n')
		const hLines = Array.from({ length: LANG_ROWS + PRICING_ROWS }, (_, i) =>
			`<line x1="0" y1="${HEADER_H + (i + 1) * ROW_H}" x2="${svgW}" y2="${HEADER_H + (i + 1) * ROW_H}" stroke="#EEEEEE" stroke-width="1"/>`
		).join('\n')

		res.setHeader('Content-Type', 'image/svg+xml')
		res.send(`<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">
<rect width="${svgW}" height="${svgH}" fill="white"/>
<rect width="${svgW}" height="${HEADER_H}" fill="#EEEEEE"/>
${headerTexts}
${rowsHtml}
${separator}
${pricingRowsHtml}
${vLines}
${hLines}
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
<title>TCGdex Card Database Status</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300..700&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #ffffff;
  --bg2: #f6f6f6;
  --fg: #393838;
  --fg2: #8d8b8b;
  --border: #eeeded;
  --card: #ffffff;
  --pill: #f6f6f6;
  --pill-fg: #595858;
  --pill-active: #c80040;
  --pill-active-fg: #ffffff;
  --ok: #16a34a;
  --ok-bg: #dcfce7;
  --warn: #d97706;
  --warn-bg: #fef3c7;
  --err: #dc2626;
  --err-bg: #fee2e2;
  --neutral: #c2c2c2;
  --bar-bg: #eeeded;
  --accent: #c80040;
  --shadow: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #191818;
    --bg2: #282626;
    --fg: #c2c2c2;
    --fg2: #8d8b8b;
    --border: #393838;
    --card: #282626;
    --pill: #393838;
    --pill-fg: #8d8b8b;
    --pill-active: #c80040;
    --pill-active-fg: #ffffff;
    --ok: #4ade80;
    --ok-bg: #14532d;
    --warn: #fbbf24;
    --warn-bg: #451a03;
    --err: #f87171;
    --err-bg: #450a0a;
    --neutral: #595858;
    --bar-bg: #393838;
    --accent: #c80040;
    --shadow: 0 1px 3px rgba(0,0,0,.4);
  }
}
:root[data-theme="dark"] {
  --bg: #191818; --bg2: #282626; --fg: #c2c2c2; --fg2: #8d8b8b;
  --border: #393838; --card: #282626; --pill: #393838; --pill-fg: #8d8b8b;
  --pill-active: #c80040; --pill-active-fg: #ffffff;
  --ok: #4ade80; --ok-bg: #14532d; --warn: #fbbf24; --warn-bg: #451a03;
  --err: #f87171; --err-bg: #450a0a; --neutral: #595858; --bar-bg: #393838;
  --accent: #c80040; --shadow: 0 1px 3px rgba(0,0,0,.4);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg); color: var(--fg); font-family: 'Lexend', ui-sans-serif, system-ui, sans-serif; font-size: 14px; line-height: 1.5; }
a { color: var(--accent); }

.page { max-width: 1400px; margin: 0 auto; padding: 24px 16px 64px; }

header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--border); padding-bottom: 20px; }
header h1 { font-size: 20px; font-weight: 700; display: flex; align-items: center; gap: 10px; }
header h1::before { content: ''; display: inline-block; width: 4px; height: 20px; background: var(--accent); border-radius: 2px; }
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
.sub-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }

section { margin-bottom: 40px; }
section[hidden] { display: none; }
section.collapsed > *:not(.section-header) { display: none !important; }
.section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.section-header h2 { font-size: 16px; font-weight: 700; }
.section-header .meta { font-size: 12px; color: var(--fg2); }
.collapse-btn { margin-left: auto; background: none; border: 1px solid var(--border); border-radius: 4px; color: var(--fg2); cursor: pointer; font-size: 11px; padding: 2px 7px; transition: transform .2s; flex-shrink: 0; }
.collapse-btn:hover { border-color: var(--fg2); }
section.collapsed .collapse-btn { transform: rotate(-90deg); }

/* Cards grid */
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
.card {
  background: var(--card); border: 1px solid var(--border); border-radius: 10px;
  padding: 14px 16px; box-shadow: var(--shadow);
}
.card-label { font-size: 12px; color: var(--fg2); margin-bottom: 4px; }
.card-value { font-size: 15px; font-weight: 600; }
.card-sub { font-size: 11px; color: var(--fg2); margin-top: 2px; }


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
.badge.ok { background: var(--ok-bg); color: var(--ok); }
.badge.miss { background: var(--err-bg); color: var(--err); }
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
    <h1>TCGdex Cards Database Status</h1>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span class="uptime-badge" id="uptime-badge">Loading…</span>
      <a class="uptime-badge" href="https://github.com/tcgdex/cards-database" target="_blank" rel="noopener" style="text-decoration:none" id="version-badge">Loading…</a>
      <a class="uptime-badge" href="https://status.tcgdex.dev/" target="_blank" rel="noopener" style="text-decoration:none">Server Status ↗</a>
    </div>
  </header>

  <nav class="filters" id="filter-bar">
    <button class="filter-btn active" data-section="all">All</button>
    <button class="filter-btn" data-section="languages">Languages</button>
    <button class="filter-btn" data-section="sets">Sets</button>
    <button class="filter-btn" data-section="pricing">Pricing</button>
  </nav>

  <section id="sec-languages">
    <div class="section-header">
      <h2>Language Progress</h2>
      <span class="meta" id="lang-meta"></span>
      <button class="collapse-btn" onclick="toggleSection('sec-languages')">▼</button>
    </div>
    <div class="sub-filters">
      <button class="sub-btn active" data-group="all">All</button>
      <button class="sub-btn" data-group="inter">International</button>
      <button class="sub-btn" data-group="asia">Asia</button>
    </div>
    <div class="table-wrap" id="lang-table-wrap"><div class="loading">Loading…</div></div>
  </section>

  <section id="sec-sets">
    <div class="section-header">
      <h2>Set Completion</h2>
      <button class="collapse-btn" onclick="toggleSection('sec-sets')">▼</button>
    </div>
    <div class="sub-filters" id="sets-lang-filters" style="margin-bottom:12px">
      <button class="sub-btn active" data-slang="all">Summary</button>
      <button class="sub-btn" data-slang="inter">International</button>
      <button class="sub-btn" data-slang="asia">Asia</button>
    </div>
    <div class="search-wrap"><input type="text" id="set-search" placeholder="Filter sets by name or ID…"></div>
    <div id="sets-container"><div class="loading">Loading…</div></div>
  </section>

  <section id="sec-pricing">
    <div class="section-header">
      <h2>Pricing Coverage</h2>
      <span class="meta" id="pricing-meta"></span>
      <button class="collapse-btn" onclick="toggleSection('sec-pricing')">▼</button>
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
  const sections = { languages: 'sec-languages', sets: 'sec-sets', pricing: 'sec-pricing' }
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

  // ── uptime / version badges ───────────────────────────────────────────────
  document.getElementById('uptime-badge').textContent = 'Up ' + fmtUptime(data.server.uptime)
  document.getElementById('version-badge').textContent = data.server.version + ' (' + data.server.commit + ') ↗'

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
            <td><b>\${s.name}</b> <span style="color:var(--fg2);font-size:11px">\${l}</span></td>
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
  let setsLangGroup = 'all'
  let asiaActiveLang = null
  const asiaDataCache = {}

  // Asia view — own series/set hierarchy per language
  async function renderAsiaView() {
    const container = document.getElementById('sets-container')
    const asiaLangsAvail = langKeys.filter(l => langs[l]?.group === 'asia')
    if (!asiaActiveLang || !asiaLangsAvail.includes(asiaActiveLang)) {
      asiaActiveLang = asiaLangsAvail[0] ?? null
    }
    if (!asiaActiveLang) {
      container.innerHTML = '<div class="loading">No Asia language data available.</div>'
      return
    }
    container.innerHTML = \`
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px" id="asia-lang-picker">
        \${asiaLangsAvail.map(l => \`<button class="sub-btn \${l === asiaActiveLang ? 'active' : ''}" data-alang="\${l}">\${langs[l].name} <span style="opacity:.7;font-size:11px">\${l}</span></button>\`).join('')}
      </div>
      <div id="asia-content"><div class="loading">Loading…</div></div>
    \`
    document.getElementById('asia-lang-picker').addEventListener('click', async e => {
      const btn = e.target.closest('[data-alang]')
      if (!btn) return
      document.querySelectorAll('[data-alang]').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      asiaActiveLang = btn.dataset.alang
      await loadAsiaContent()
    })
    await loadAsiaContent()
  }

  async function loadAsiaContent() {
    const contentDiv = document.getElementById('asia-content')
    if (!contentDiv) return
    if (asiaDataCache[asiaActiveLang]) { renderAsiaData(asiaDataCache[asiaActiveLang]); return }
    contentDiv.innerHTML = '<div class="loading">Loading…</div>'
    try {
      const d = await fetch('/status/data/asia/' + asiaActiveLang).then(r => r.json())
      asiaDataCache[asiaActiveLang] = d
      renderAsiaData(d)
    } catch {
      contentDiv.innerHTML = '<div style="color:var(--err)">Failed to load.</div>'
    }
  }

  function renderAsiaData(d) {
    const contentDiv = document.getElementById('asia-content')
    if (!contentDiv) return
    const term = setSearchTerm.toLowerCase()
    const blocks = Object.entries(d.series).map(([serieId, serie]) => {
      const setEntries = Object.entries(serie.sets).filter(([setId, s]) =>
        !term || s.name.toLowerCase().includes(term) || setId.toLowerCase().includes(term) || serie.name.toLowerCase().includes(term)
      )
      if (!setEntries.length) return ''
      const rows = setEntries.map(([setId, s]) => \`
        <tr class="set-row" data-setid="\${setId}">
          <td><b>\${s.name}</b><br><span style="color:var(--fg2);font-size:11px">\${setId} · \${s.count} cards</span></td>
          <td>\${s.count}</td>
          <td>\${s.images} / \${s.count}</td>
          <td>\${bar(s.images, s.count)}</td>
        </tr>\`).join('')
      return \`<div class="serie-block" data-serie="\${serieId}">
        <button class="serie-toggle" onclick="toggleSerie(this)">
          <span>\${serie.name} <span style="font-size:12px;font-weight:400;color:var(--fg2)">\${serieId}</span></span>
          <span class="chevron">▼</span>
        </button>
        <div class="serie-body">
          <table>
            <thead><tr><th>Set</th><th>Cards</th><th>Images</th><th>Image %</th></tr></thead>
            <tbody>\${rows}</tbody>
          </table>
        </div>
      </div>\`
    }).join('')
    contentDiv.innerHTML = blocks || '<div class="loading">No sets match your search.</div>'
  }

  // International/summary view — EN-centric sets with lang columns
  function renderSets() {
    if (setsLangGroup === 'asia') { renderAsiaView(); return }

    const container = document.getElementById('sets-container')
    const serieEntries = Object.entries(seriesData)
    const term = setSearchTerm.toLowerCase()
    const visLangs = setsLangGroup === 'all' ? null
      : langKeys.filter(l => langs[l]?.group === setsLangGroup)

    const blocks = serieEntries.map(([serieId, serie]) => {
      const setEntries = Object.entries(serie.sets).filter(([setId, s]) =>
        !term || s.name.toLowerCase().includes(term) || setId.toLowerCase().includes(term) || serie.name.toLowerCase().includes(term)
      )
      if (!setEntries.length) return ''

      const rows = setEntries.map(([setId, s]) => {
        let cells
        if (!visLangs) {
          const withData = langKeys.filter(l => langs[l]?.group === 'inter' && s.langs[l]).length
          const interTotal = langKeys.filter(l => langs[l]?.group === 'inter').length
          cells = \`<td>\${withData > 0 ? withData + ' / ' + interTotal : '<span style="color:var(--fg2)">—</span>'}</td>\`
        } else {
          cells = visLangs.map(l => {
            const ld = s.langs[l]
            if (!ld) return '<td class="na" style="background:var(--bg2);color:var(--fg2);text-align:center">—</td><td style="background:var(--bg2)"></td>'
            const cp = pct(ld.count, s.total || 1)
            const ip = pct(ld.images, s.total || 1)
            return \`<td>\${tag(cp)}</td><td>\${tag(ip)}</td>\`
          }).join('')
        }
        const colspan = visLangs ? 1 + visLangs.length * 2 : 2
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

      let langHeaders, subHeaders
      if (!visLangs) {
        langHeaders = '<th>International langs</th>'
        subHeaders = '<th>with data</th>'
      } else {
        langHeaders = visLangs.map(l => \`<th colspan="2">\${langs[l]?.name ?? l} <span style="font-weight:400;font-size:11px;opacity:.6">\${l}</span></th>\`).join('')
        subHeaders = visLangs.map(() => '<th>Cards</th><th>Images</th>').join('')
      }

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
    if (setsLangGroup === 'asia' && asiaDataCache[asiaActiveLang]) {
      renderAsiaData(asiaDataCache[asiaActiveLang])
    } else {
      renderSets()
    }
  })

  document.getElementById('sets-lang-filters').addEventListener('click', e => {
    const btn = e.target.closest('.sub-btn')
    if (!btn || !btn.dataset.slang) return
    document.querySelectorAll('[data-slang]').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    setsLangGroup = btn.dataset.slang
    renderSets()
  })

  window.toggleSection = function(id) {
    document.getElementById(id).classList.toggle('collapsed')
  }

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
      const b = (label, ok) => \`<span class="badge \${ok ? 'ok' : 'miss'}">\${label}</span>\`
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
