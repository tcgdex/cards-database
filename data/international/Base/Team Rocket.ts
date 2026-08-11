import { Set } from 'models/database/set'
import serie from '../Base'

const base5: Set = {
	id: "base5",

	name: {
		'en-us': "Team Rocket",
		'fr-fr': "Team Rocket",
		'it-it': "Team Rocket",
		'de-de': "Team Rocket"
	},

	serie: serie,
	tcgOnline: "TR",

	cardCount: {
		official: 82
	},

	releaseDate: "2000-04-24",

	abbreviations: {
		official: "RO",
		'fr-fr': "ROC"
	},

	thirdParty: {
		cardmarket: 1528,
		tcgplayer: 1373
	}
}

export default base5
