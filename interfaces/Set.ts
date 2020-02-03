import LangList from "./LangList";
import Expansion from "./Expansion";

export default interface Set {
	// Display Name
	name: LangList<string> | string

	expansion?: Expansion

	expansionCode?: string

	code?: string
	tcgoCode?: string

	cardCount?: {
		// total containing all secrets
		total: number
		// official count on cards
		official: number
	}

	// subsets only releaseDate
	releaseDate?: string // date in format yyyy-mm-dd

	// api endpoint for scrapping
	api?: string

	legal?: {
		standard: boolean,
		expanded: boolean
	}

	images?: {
		// thingy on bottom of cards
		symbol?: string
		// Official logo of set
		logo?: string
	}


	//temp
	slug?: string
	subsets?: Array<Set>
}
