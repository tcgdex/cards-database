import { Set } from 'models/database/set'
import serie from '../Base'

const base2: Set = {
	id: "base2",

	name: {
		'en-us': "Jungle",
		'fr-fr': "Jungle",
		'de-de': "Dschungel",
		'it-it': "Jungle",
		'es-es': "Jungla",
		'pt-br': "Selva",
		'nl-nl': "Jungle"
	},

	serie: serie,
	tcgOnline: "JU",

	cardCount: {
		official: 64
	},

	releaseDate: "1999-06-16",

	abbreviations: {
		official: "JU",
		'fr-fr': "JUN"
	},

	thirdParty: {
		cardmarket: 1525,
		tcgplayer: 635
	}
}

export default base2
