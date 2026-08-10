// Deprecated, it will be removed soonish in favor of below
import type { Card } from './meta/models/database/card'
import type { Serie } from './meta/models/database/serie'
import type { Set } from './meta/models/database/set'

export {
	Card, Serie, Set
}

/**
 * Filter for cards legality
 */
export interface Filter {
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
