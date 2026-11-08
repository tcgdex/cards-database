import { Set } from 'models/database/set'
import serie from '../Neo'

const neo4: Set = {
	id: "neo4",

	name: {
		'en-us': "Neo Destiny",
		'fr-fr': "Neo Destiny",
		'de-de': "Neo Destiny",
		'it-it': "Neo Destiny"
	},

	serie: serie,
	tcgOnline: "N4",

	cardCount: {
		official: 105
	},

	releaseDate: "2002-02-28",

	abbreviations: {
		official: "N4",
		'fr-fr': "NDT"
	},

	thirdParty: {
		cardmarket: 1534,
		tcgplayer: 1444
	}
}

export default neo4
