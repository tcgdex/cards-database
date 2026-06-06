
export default class SetResume {
	public id!: string
	public name!: string
	public logo?: string
	public symbol?: string
	public cardCount!: {

		/**
		 * total of number of cards
		 */
		total: number

		/**
		 * number of cards officialy (on the bottom of each cards)
		 */
		official: number
	}
}
