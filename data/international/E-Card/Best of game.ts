import { Set } from 'models/database/set'
import serie from '../E-Card'

const bog: Set = {
	id: "bog",

	name: {
		'en-us': "Best of game"
	},

	serie: serie,

	cardCount: {
		official: 9
	},

	releaseDate: "2002-12-01",

	thirdParty: {
		cardmarket: 1605,
		tcgplayer: 1455
	}
}

export default bog
