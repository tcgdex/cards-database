import { Set } from 'models/database/set'
import serie from '../SM'

const set: Set = {
	id: 'SM10',
	name: {
		'ja-jp': 'ダブルブレイズ',
		'ko-kr': '더블블레이즈'
	},

	serie: serie,

	cardCount: {
		official: 95
	},
	releaseDate: '2019-03-01',

	thirdParty: {
		cardmarket: 3836
	}
}

export default set
