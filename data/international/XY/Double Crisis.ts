import { Set } from 'models/database/set'
import serie from '../XY'

const dc1: Set = {
	id: "dc1",

	name: {
		'en-us': "Double Crisis",
		'fr-fr': "Double Danger",
		'pt-br': "Crise Dupla"
	},

	serie: serie,
	tcgOnline: "DCR",

	cardCount: {
		official: 34
	},

	releaseDate: "2015-03-25",

	abbreviations: {
		official: "DCR",
		'fr-fr': "DBD"
	},

	thirdParty: {
		cardmarket: 1648,
		tcgplayer: 1525
	}
}

export default dc1
