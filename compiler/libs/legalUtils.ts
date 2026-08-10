import * as legals from '../../../meta/legals'

/**
 * Check if a card is currently Legal
 * @param type the type of legality
 * @param card the card to check
 * @param localId the card localid
 * @returns {boolean} if the card is currently in the legal type
 */
export function cardIsLegal(type: 'standard' | 'expanded', card: { regulationMark?: string, energyType?: string, types?: Array<string> }, id: string): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.find((it) => id.startsWith(id)) ||
		legal.includes.sets.find((it) => id.startsWith(id)) ||
		card.energyType === "Normal" ||
		card.regulationMark && legal.includes.regulationMark.includes(card.regulationMark)
	) {
		return !(
			legal.excludes.sets.find((it) => id.startsWith(id)) ||
			(type === 'standard' && card.types?.includes("Fairy")) ||
			legal.excludes.cards.includes(id)
		)
	}

	return false;
}

/**
 * Check if a set is currently Legal
 * @param type the type of legality
 * @param set the set to check
 * @returns {boolean} if the set is currently in the legal type
 */
export function setIsLegal(type: 'standard' | 'expanded', set: { id: string; serie: { id: string } }): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.includes(set.serie.id) ||
		legal.includes.sets.includes(set.id)
	) {
		return !legal.excludes.sets.includes(set.id)
	}
	return false
}
