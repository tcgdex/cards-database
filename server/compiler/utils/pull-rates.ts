import { Card, variant_detailed } from '../../../interfaces'

/** 
 * Returns true if all rules defined on 'rule' match the corresponding 
 * fields on 'variant'. Fields not present on 'rule' are ignored 
 */

function variantMatchesRule(
    variant: variant_detailed,
    rule: Partial<variant_detailed>
): boolean {
    return (Object.keys(rule) as Array<keyof variant_detailed>).every(
        (key) => variant[key] === rule[key]
    )
}

/**
 * Derives pullRate and variantPullRates for a card from its parent set's
 * pullRates. Returns only the fields that have matches — omits both if
 * no data is available.
 */
export function deriveCardPullRates(card: Card): Pick<Card, 'pullRate' | 'variantPullRates'> {
    const result: Pick<Card, 'pullRate' | 'variantPullRates'> = {}

    const pullRates = card.set.pullRates
    if (!pullRates) return result
    
    // Rarity pull rate
    if (pullRates.rarities && card.rarity) {
        const rate = pullRates.rarities[card.rarity]
        if ( rate !== undefined) {
            result.pullRate = rate
        }
    }

    // Variant pull rates — only for detailed variant arrays
    if (
        pullRates.specialVariants &&
        Array.isArray(card.variants) && 
        card.variants.length > 0
    ) {
        const detailedVariants = card.variants as variant_detailed[] 
        const matched: NonNullable<Card['variantPullRates']> = []

        for (const variant of detailedVariants) {
            const rule = pullRates.specialVariants.find((r) => 
                variantMatchesRule(variant, r.match)
            )
            if (rule) {
                matched.push({ variant, rate: rule.rate }) 
            }
        }

        if (matched.length > 0) {
            result.variantPullRates = matched
        }
    }

    return result
}
