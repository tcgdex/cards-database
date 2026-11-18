import fs from 'node:fs/promises'
import path from 'node:path'

import { getCategoryIdForSetFile, toImportUrl } from './utils-data/tcgtracking'
import { getPricingProvidersFromEnv } from './pricing/sources'
import type { PricingProvider, PricingSourceName, ResolvedPrice } from './pricing/types'

// ---------------------------------------------------------------------------
// Card / set shapes
// ---------------------------------------------------------------------------

interface TCGDexSet {
	id?: string
	name?: Record<string, string>
	thirdParty?: { tcgplayer?: number }
}

interface TCGDexVariant {
	type?: string
	subtype?: string
	size?: string
	stamp?: string[]
	foil?: string
	thirdParty?: { tcgplayer?: number }
}

interface TCGDexCard {
	name?: Record<string, string>
	set?: TCGDexSet
	thirdParty?: { tcgplayer?: number }
	variants?: Record<string, boolean> | TCGDexVariant[]
}

interface TCGDexCardModule {
	default?: TCGDexCard
}

// ---------------------------------------------------------------------------
// Report shapes
// ---------------------------------------------------------------------------

interface ResolvedCardPriceEntry {
	target: 'card' | 'variant'
	variantIndex?: number
	variant?: {
		type?: string
		subtype?: string
		size?: string
		stamp?: string[]
		foil?: string
	}
	tcgplayerProductId: number
	source: PricingSourceName
	priceType: string
	low?: number
	market?: number
}

interface ResolvedCardPrice {
	cardId: string
	cardFile: string
	cardName?: string
	setId?: string
	setName?: string
	categoryId: number
	tcgplayerSetId: number
	prices: ResolvedCardPriceEntry[]
}

interface MissingPrice {
	cardId: string
	cardFile: string
	cardName?: string
	setId?: string
	setName?: string
	categoryId?: number
	tcgplayerSetId?: number
	tcgplayerProductId?: number
	target: 'card' | 'variant' | 'set'
	variantIndex?: number
	reason:
		| 'missing-card-tcgplayer-id'
		| 'missing-variant-tcgplayer-id'
		| 'missing-set-tcgplayer-id'
		| 'no-pricing-data'
}

interface PricingReport {
	createdAt: string
	providers: PricingSourceName[]
	summary: {
		cardFilesScanned: number
		cardFilesWithPrices: number
		priceEntriesResolved: number
		missing: number
		debugArtifactWritten: boolean
	}
	resolvedBySource: Array<{ source: PricingSourceName; count: number }>
	resolvedByTarget: Array<{ target: 'card' | 'variant'; count: number }>
	missingByReason: Array<{ reason: MissingPrice['reason']; count: number }>
	resolved: ResolvedCardPrice[]
	missing: MissingPrice[]
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
	const providers = getPricingProvidersFromEnv()
	const writeDebugArtifact = process.argv.includes('--write-debug-artifact')

	console.log(`Providers: ${providers.map((p) => p.name).join(', ')}`)

	const cardFiles = await findCardFiles([
		path.join(process.cwd(), 'data'),
		path.join(process.cwd(), 'data-asia'),
	])

	const resolved: ResolvedCardPrice[] = []
	const missing: MissingPrice[] = []
	let priceEntriesResolved = 0

	for (const cardFile of cardFiles) {
		const cardId = getCardIdFromFile(cardFile)
		const cardModule = (await import(toImportUrl(cardFile))) as TCGDexCardModule
		const card = cardModule.default

		if (!card) {
			continue
		}

		const categoryId = getCategoryIdForSetFile(cardFile)
		const tcgplayerSetId = card.set?.thirdParty?.tcgplayer
		const cardName = getEnglishName(card.name)
		const setId = card.set?.id
		const setName = getEnglishName(card.set?.name)

		if (typeof tcgplayerSetId !== 'number') {
			missing.push({
				cardId,
				cardFile: rel(cardFile),
				cardName,
				setId,
				setName,
				categoryId,
				target: 'set',
				reason: 'missing-set-tcgplayer-id',
			})
			continue
		}

		const cardPriceEntries = await resolveCardPrices({
			card,
			cardId,
			cardFile,
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			providers,
			missing,
		})

		if (cardPriceEntries.length === 0) {
			continue
		}

		priceEntriesResolved += cardPriceEntries.length

		resolved.push({
			cardId,
			cardFile: rel(cardFile),
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			prices: cardPriceEntries,
		})
	}

	const report: PricingReport = {
		createdAt: new Date().toISOString(),
		providers: providers.map((p) => p.name),
		summary: {
			cardFilesScanned: cardFiles.length,
			cardFilesWithPrices: resolved.length,
			priceEntriesResolved,
			missing: missing.length,
			debugArtifactWritten: writeDebugArtifact,
		},
		resolvedBySource: groupBySource(resolved),
		resolvedByTarget: groupByTarget(resolved),
		missingByReason: groupMissingByReason(missing),
		resolved,
		missing,
	}

	await writeReport(report)

	if (writeDebugArtifact) {
		await writeResolvedArtifact(resolved)
	}

	printSummary(report)
}

// ---------------------------------------------------------------------------
// Price resolution
// ---------------------------------------------------------------------------

async function resolveCardPrices({
	card,
	cardId,
	cardFile,
	cardName,
	setId,
	setName,
	categoryId,
	tcgplayerSetId,
	providers,
	missing,
}: {
	card: TCGDexCard
	cardId: string
	cardFile: string
	cardName?: string
	setId?: string
	setName?: string
	categoryId: number
	tcgplayerSetId: number
	providers: PricingProvider[]
	missing: MissingPrice[]
}): Promise<ResolvedCardPriceEntry[]> {
	const entries: ResolvedCardPriceEntry[] = []

	if (Array.isArray(card.variants)) {
		for (const [variantIndex, variant] of card.variants.entries()) {
			const tcgplayerProductId = variant.thirdParty?.tcgplayer

			if (typeof tcgplayerProductId !== 'number') {
				missing.push({
					cardId,
					cardFile: rel(cardFile),
					cardName,
					setId,
					setName,
					categoryId,
					tcgplayerSetId,
					target: 'variant',
					variantIndex,
					reason: 'missing-variant-tcgplayer-id',
				})
				continue
			}

			const prices = await getPricesFromProviders(providers, {
				categoryId,
				tcgplayerSetId,
				tcgplayerProductId,
			})

			if (prices.length === 0) {
				missing.push({
					cardId,
					cardFile: rel(cardFile),
					cardName,
					setId,
					setName,
					categoryId,
					tcgplayerSetId,
					tcgplayerProductId,
					target: 'variant',
					variantIndex,
					reason: 'no-pricing-data',
				})
				continue
			}

			for (const price of prices) {
				entries.push({
					target: 'variant',
					variantIndex,
					variant: {
						type: variant.type,
						subtype: variant.subtype,
						size: variant.size,
						stamp: variant.stamp,
						foil: variant.foil,
					},
					tcgplayerProductId,
					source: price.source,
					priceType: price.priceType,
					low: price.low,
					market: price.market,
				})
			}
		}

		return entries
	}

	const tcgplayerProductId = card.thirdParty?.tcgplayer

	if (typeof tcgplayerProductId !== 'number') {
		missing.push({
			cardId,
			cardFile: rel(cardFile),
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			target: 'card',
			reason: 'missing-card-tcgplayer-id',
		})
		return entries
	}

	const prices = await getPricesFromProviders(providers, {
		categoryId,
		tcgplayerSetId,
		tcgplayerProductId,
	})

	if (prices.length === 0) {
		missing.push({
			cardId,
			cardFile: rel(cardFile),
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			tcgplayerProductId,
			target: 'card',
			reason: 'no-pricing-data',
		})
		return entries
	}

	for (const price of prices) {
		entries.push({
			target: 'card',
			tcgplayerProductId,
			source: price.source,
			priceType: price.priceType,
			low: price.low,
			market: price.market,
		})
	}

	return entries
}

async function getPricesFromProviders(
	providers: PricingProvider[],
	input: {
		categoryId: number
		tcgplayerSetId: number
		tcgplayerProductId: number
	},
): Promise<ResolvedPrice[]> {
	for (const provider of providers) {
		const prices = await provider.getPrices(input)

		if (prices.length > 0) {
			return prices
		}
	}

	return []
}

// ---------------------------------------------------------------------------
// File scanning
// ---------------------------------------------------------------------------

async function findCardFiles(rootFolders: string[]): Promise<string[]> {
	const files: string[] = []

	for (const rootFolder of rootFolders) {
		const exists = await pathExists(rootFolder)

		if (!exists) {
			continue
		}

		await walk(rootFolder, files)
	}

	return files.filter((file) => {
		if (!file.endsWith('.ts')) {
			return false
		}

		const relative = path.relative(process.cwd(), file).replace(/\\/g, '/')
		const parts = relative.split('/')

		// data/Serie/Set/Card.ts  or  data-asia/Serie/Set/Card.ts
		return (
			(parts[0] === 'data' || parts[0] === 'data-asia') && parts.length === 4
		)
	})
}

async function walk(folder: string, files: string[]): Promise<void> {
	const entries = await fs.readdir(folder, { withFileTypes: true })

	for (const entry of entries) {
		const fullPath = path.join(folder, entry.name)

		if (entry.isDirectory()) {
			await walk(fullPath, files)
		} else {
			files.push(fullPath)
		}
	}
}

// ---------------------------------------------------------------------------
// Report writing
// ---------------------------------------------------------------------------

async function writeReport(report: PricingReport): Promise<void> {
	const reportFile = path.join(
		process.cwd(),
		'var',
		'reports',
		'pricing-update.json',
	)

	await fs.mkdir(path.dirname(reportFile), { recursive: true })
	await fs.writeFile(reportFile, `${JSON.stringify(report, null, '\t')}\n`, 'utf8')
}

async function writeResolvedArtifact(resolved: ResolvedCardPrice[]): Promise<void> {
	const outputFile = path.join(
		process.cwd(),
		'var',
		'models',
		'tcgtracking',
		'resolved-pricing.json',
	)

	await fs.mkdir(path.dirname(outputFile), { recursive: true })
	await fs.writeFile(
		outputFile,
		`${JSON.stringify(
			{
				source: 'tcgtracking',
				createdAt: new Date().toISOString(),
				cards: resolved,
			},
			null,
			'\t',
		)}\n`,
		'utf8',
	)
}

// ---------------------------------------------------------------------------
// Grouping helpers
// ---------------------------------------------------------------------------

function groupBySource(
	resolved: ResolvedCardPrice[],
): Array<{ source: PricingSourceName; count: number }> {
	const counts = new Map<PricingSourceName, number>()

	for (const card of resolved) {
		for (const price of card.prices) {
			counts.set(price.source, (counts.get(price.source) ?? 0) + 1)
		}
	}

	return Array.from(counts.entries())
		.map(([source, count]) => ({ source, count }))
		.sort((a, b) => b.count - a.count)
}

function groupByTarget(
	resolved: ResolvedCardPrice[],
): Array<{ target: 'card' | 'variant'; count: number }> {
	const counts = new Map<'card' | 'variant', number>()

	for (const card of resolved) {
		for (const price of card.prices) {
			counts.set(price.target, (counts.get(price.target) ?? 0) + 1)
		}
	}

	return Array.from(counts.entries())
		.map(([target, count]) => ({ target, count }))
		.sort((a, b) => b.count - a.count)
}

function groupMissingByReason(
	missing: MissingPrice[],
): Array<{ reason: MissingPrice['reason']; count: number }> {
	const counts = new Map<MissingPrice['reason'], number>()

	for (const item of missing) {
		counts.set(item.reason, (counts.get(item.reason) ?? 0) + 1)
	}

	return Array.from(counts.entries())
		.map(([reason, count]) => ({ reason, count }))
		.sort((a, b) => b.count - a.count)
}

// ---------------------------------------------------------------------------
// Summary output
// ---------------------------------------------------------------------------

function printSummary(report: PricingReport): void {
	console.log('')
	console.log('Pricing update complete.')
	console.log(`Providers:              ${report.providers.join(', ')}`)
	console.log(`Card files scanned:     ${report.summary.cardFilesScanned}`)
	console.log(`Cards with prices:      ${report.summary.cardFilesWithPrices}`)
	console.log(`Price entries resolved: ${report.summary.priceEntriesResolved}`)
	console.log(`Missing records:        ${report.summary.missing}`)
	console.log(`Debug artifact:         ${report.summary.debugArtifactWritten ? 'written' : 'skipped'}`)

	if (report.resolvedBySource.length > 0) {
		console.log('')
		console.log('Resolved by source:')

		for (const item of report.resolvedBySource) {
			console.log(`  ${item.source}: ${item.count}`)
		}
	}

	if (report.resolvedByTarget.length > 0) {
		console.log('')
		console.log('Resolved by target:')

		for (const item of report.resolvedByTarget) {
			console.log(`  ${item.target}: ${item.count}`)
		}
	}

	if (report.missingByReason.length > 0) {
		console.log('')
		console.log('Missing by reason:')

		for (const item of report.missingByReason) {
			console.log(`  ${item.reason}: ${item.count}`)
		}
	}

	console.log('')
	console.log('Report: var/reports/pricing-update.json')

	if (report.summary.debugArtifactWritten) {
		console.log('Debug artifact: var/models/tcgtracking/resolved-pricing.json')
	}
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

async function pathExists(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath)
		return true
	} catch {
		return false
	}
}

function getCardIdFromFile(filePath: string): string {
	const filename = path.basename(filePath)
	return filename.slice(0, filename.lastIndexOf('.'))
}

function getEnglishName(value?: Record<string, string>): string | undefined {
	return value?.en ?? Object.values(value ?? {})[0]
}

function rel(filePath: string): string {
	return path.relative(process.cwd(), filePath).replace(/\\/g, '/')
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
