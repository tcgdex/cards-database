import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S10b',

	name: {
		'ja-jp': 'Pokémon GO',
		'ko-kr': 'Pokémon GO',
		'zh-tw': 'Pokémon GO',
		'id-id': 'Pokémon GO',
		'th-th': 'Pokémon GO'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	releaseDate: {
		'ja-jp': '2022-06-17',
		'zh-tw': '2022-06-17',
		'th-th': '2022-06-24',
		'id-id': '2022-06-17'
	},

	thirdParty: {
		cardmarket: 4786
	}
}

export default set
