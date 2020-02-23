import LangList from "./LangList";
import Expansion from "./Expansion";

/**
 * Set Interface containing all informations about the set
 */
export default interface Set {
	/**
	 * Display Name
	 */
	name: LangList<string> | string

	/**
	 * Expansion Object
	 */
	expansion?: Expansion

	/**
	 * Expansion code
	 */
	expansionCode?: string

	/**
	 * Set code (Also used as the slug)
	 */
	code: string

	/**
	 * Trading card online code
	 */
	tcgoCode?: string

	cardCount?: {
		/**
		 * total number of cards including secrets
		 */
		total: number
		/**
		 * number of card indicated at the bottom of each cards
		 */
		official: number
	}

	cardTypes?: {
		/**
		 * Default: true
		 */
		normal: boolean
		/**
		 * Default: true
		 */
		reverse: boolean
		/**
		 * Default: true
		 */
		holo: boolean
		/**
		 * Default: false
		 */
		ed1: boolean
	}

	/**
	 * Format of numbering
	 * ex: SWSH[000] mean that it has SWSH as prefix and start at 000 -> 001 -> 002 -> etc
	 *
	 * @type {string}
	 * @memberof Set
	 */
	format?: string

	/**
	 * Release date of the set
	 * in format: yyyy-mm-dd
	 * ex: 2002-12-22
	 *
	 * @type {string}
	 * @memberof Set
	 */
	releaseDate?: string // date in format yyyy-mm-dd

	/**
	 * Aol Endpoint for scrapping
	 */
	api?: string

	/**
	 * Competition usage
	 */
	legal?: {
		standard: boolean
		expanded: boolean
	}

	images?: {
		/**
		 * Symbol icon on bottom of card
		 * available extensions [
		 * 	webp
		 * 	jpg
		 * 	png
		 * ]
		 */
		symbol?: string
		/**
		 * Official logo of set
		 * available extensions [
		 * 	webp
		 * 	jpg
		 * 	png
		 * ]
		 */
		logo?: string
	}

	/**
	 * Language in which the set is available
	 */
	availability?: LangList<boolean>
}
