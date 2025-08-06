import { Set } from '../../interfaces'
import serie from '../Base'

const base3: Set = {
	id: "base3",

	name: {
		en: "Fossil",
		fr: "Fossile",
		es: "Fósil",
		it: "Fossil",
		de: "Fossil",
		pt: "Fóssil",
		nl: "Fossiel"
	},

	serie: serie,
	tcgOnline: "FO",

	cardCount: {
		official: 62
	},

	releaseDate: "1999-10-10",

	abbreviations: {
		official: "FO",
		fr: "FOS"
	},

	thirdParty: {
		cardmarket: 1526,
		tcgplayer: 630
	}
}

export default base3
