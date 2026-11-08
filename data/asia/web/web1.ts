import { Set } from 'models/database/set'
import serie from '../web'

const set: Set = {
	id: 'web1',
	name: {
		'ja-jp': 'ポケモンカード★web'
	},

	serie: serie,

	cardCount: {
		official: 48
	},
	releaseDate: '2001-10-20'
}

export default set
