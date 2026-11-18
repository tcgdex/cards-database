import { TCGTrackingProvider } from './tcgtracking'
import { TCGPlayerProvider } from './tcgplayer'
import type { PricingProvider, PricingSourceName } from './types'

const PROVIDER_FACTORIES: Record<PricingSourceName, () => PricingProvider> = {
	tcgtracking: () => new TCGTrackingProvider(),
	tcgplayer: () => new TCGPlayerProvider(),
}

/**
 * Returns pricing providers in the order defined by TCGDEX_PRICING_SOURCES.
 *
 * Default: tcgtracking,tcgplayer
 *
 * The first provider to return prices for a product wins. Providers that
 * fail to load or have no data for a product are silently skipped.
 */
export function getPricingProvidersFromEnv(): PricingProvider[] {
	const raw = process.env.TCGDEX_PRICING_SOURCES ?? 'tcgtracking,tcgplayer'

	return raw
		.split(',')
		.map((s) => s.trim() as PricingSourceName)
		.filter((name) => name in PROVIDER_FACTORIES)
		.map((name) => PROVIDER_FACTORIES[name]())
}
