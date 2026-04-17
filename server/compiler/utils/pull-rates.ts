import { Card, PullRateValue, variant_detailed } from '../../../interfaces'

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
 * Derives the pull rate for a specific variant from its parent set's pullRates.
 * Returns undefined if no matching rule exists.
 */
export function deriveVariantPullRate(
    variant: variant_detailed,
    card: Card
): PullRateValue | undefined {
    const pullRates = card.set.pullRates
    if (!pullRates?.specialVariants) return undefined

    const rule = pullRates.specialVariants.find((r) => {
        const { rate, ...match } = r
        return variantMatchesRule(variant, match)
    })
    return rule?.rate
}
