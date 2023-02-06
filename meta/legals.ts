/**
 * File Explanation
 *
 * The main goal of this file is to update quickly the current list of authorized/banned cards in the standard and expanded formats
 *
 * For included cards/set/etc we are currently using the April post of each years (note: posts seems to be coming each April)
 * - 2022: https://www.pokemon.com/us/pokemon-news/2022-pokemon-tcg-championship-series-season-format-rotation/
 * - 2021: https://www.pokemon.com/us/pokemon-news/2021-season-pokemon-tcg-format-rotation/
 * - 2020: https://www.pokemon.com/us/pokemon-news/2020-season-pokemon-tcg-format-rotation/
 *
 * For banned cards we are also following this webpage
 * - https://www.pokemon.com/us/pokemon-tcg-banned-card-list/
 */

/**
 * for each cards the compiler will check
 * - if the card is in the `series` list
 * - if the card is in the `sets` list
 * - if the card is in the `regulationMark` list
 *
 * then it will check if the card is currently excluded
 * - if the card is in the `sets` list
 * - if the card is in the `cards` list
 */

interface Filter {
	includes: {
		/**
		 * series to be included
		 */
		series: Array<string>
		/**
		 * Set to be included in the filter
		 * ex: swsh1
		 */
		sets: Array<string>
		/**
		 * Filter by regulation Marks on the cards
		 * ex: 'D'
		 */
		regulationMark: Array<string>
	}
	excludes: {
		/**
		 * sets to be excluded
		 */
		sets: Array<string>
		/**
		 * Global Ids of banned cards
		 * ex: swsh1-1
		 */
		cards: Array<string>
	}
}

export const standard: Filter = {
	includes: {
		series: [],
		sets: [],
		regulationMark: ['D', 'E']
	},
	excludes: {
		sets: [],
		cards: []
	}
}

export const expanded: Filter = {
	includes: {
		series: ['bw', 'xy', 'sm', 'swsh'],
		sets: [],
		regulationMark: []
	},
	excludes: {
		sets: [],
		cards: [
			// BW
			'bw3-67',

			'bw5-110',

			'bw9-101',
			'bw9-115',

			// XY
			'xy1-124',

			'xy2-23',

			'xy4-99',
			'xy4-118',

			'xy5-133',
			'xy5-158',

			'xy6-77',
			'xy6-106',

			'xy7-74',
			'xy7-75',

			'xy9-98',
			'xy9-109',

			'g1-71',

			// SM
			'smp-SM85',

			'sm35-45',

			'sm5-114',

			'sm6-83',

			'sm8-90',
			'sm8-91',

			'sm10-78',
			'sm10-165',
			'sm10-178',

			'sm11-206',
			'sm11-253',

			'sm115-58',
			'sm115-68',

			'sm12-186',
			'sm12-194',
			'sm12-265',
		]
	}
}
