import { Set } from 'models/database/set'
import serie from '../EX'

const ex5: Set = {
	id: "ex5",

	name: {
		'en-us': "Hidden Legends",
		'fr-fr': "EX Légendes Oubliées",
		'it-it': "EX Leggende Nascoste"
	},

	serie: serie,
	tcgOnline: "HL",

	cardCount: {
		official: 101
	},

	releaseDate: "2004-06-01",

	abbreviations: {
		official: "HL",
		'fr-fr': "LOU"
	},

	thirdParty: {
		cardmarket: 1543,
		tcgplayer: 1416
	}
}

export default ex5
