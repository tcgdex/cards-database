import { ISODate, LanguageSpecific } from '../globals'
import { Serie } from './serie'

export interface Set {
	id: string
	name: LanguageSpecific<string>
	/**
	 * Partial list of abbreviations, this is currently a Work in Progress feature
	 */
	abbreviation?: string
	serie: Serie

	/**
	 * the denominator of the card
	 *
	 * ex: `228/197` = 197
	 */
	denominator: string | number

	/**
	 * List of the boosters (might be moved to products)
	 */
	boosters?: Record<string, {
		name: LanguageSpecific<string>
		logo?: string
		artwork_front?: string 
		artwork_back?: string
	}>

	/**
	 * The global release date of the set or the language specific release
	 */
	releaseDate: ISODate | LanguageSpecific<ISODate>

	/**
	 * Copyright information printed at the bottom of the cards of this set.
	 * Can be overridden on individual cards.
	 */
	copyright: {
		/**
		 * The full line of text
		 * ex: `©2023 Pokémon / Nintendo / Creatures / GAME FREAK`
		 */
		text: string
		/**
		 * The year of the copyright
		 * ex: 2023
		 */
		year: number
	}

	/**
	 * Third parties linking
	 */
	thirdParty?: {
		cardmarket?: number
		tcgplayer?: number
	}
}
