export default class CardResume {
	/**
	 * Globally unique card ID based on the set ID and the cards ID within the set
	 */
	public id!: string

	/**
	 * Card image url without the extension and quality
	 *
	 * @see {@link getImageURL}
	 */
	public image?: string

	/**
	 * ID indexing this card within its set, usually just its number
	 */
	public localId!: string

	/**
	 * Card Name (Including the suffix if next to card name)
	 */
	public name!: string

}
