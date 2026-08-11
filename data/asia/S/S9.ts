import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S9',

	name: {
		'ja-jp': 'スターバース',
		'ko-kr': '스타버스',
		'zh-tw': '星星誕生',
		'id-id': 'Star Birth',
		'th-th': 'สตาร์เบิร์ท'
	},

	serie: serie,

	cardCount: {
		official: 100
	},

	releaseDate: {
		'ja-jp': '2022-01-14',
		'zh-tw': '2022-01-28',
		'id-id': '2022-04-22',
		'th-th': '2022-02-25'
	},

	thirdParty: {
		cardmarket: 4440
	}
}

export default set
