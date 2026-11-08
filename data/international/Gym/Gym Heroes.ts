import { Set } from 'models/database/set'
import serie from '../Gym'

const gym1: Set = {
	id: "gym1",

	name: {
		'en-us': "Gym Heroes"
	},

	serie: serie,
	tcgOnline: "G1",

	cardCount: {
		official: 132
	},

	releaseDate: "2000-08-14",

	abbreviations: {
		official: "G1"
	},

	thirdParty: {
		cardmarket: 1529,
		tcgplayer: 1441
	}
}

export default gym1
