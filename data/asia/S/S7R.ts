import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S7R',

	name: {
		'ja-jp': '蒼空ストリーム',
		'ko-kr': '창공의스트림',
		'zh-tw': '蒼空烈流',
		'id-id': 'Arus Langit Biru',
		'th-th': 'สายน้ำแห่งนภา'
	},

	serie: serie,

	cardCount: {
		official: 67
	},

	releaseDate: {
		'ja-jp': '2021-07-09',
		'zh-tw': '2021-07-23',
		'th-th': '2021-08-27',
		'id-id': '2021-11-05'
	},

	thirdParty: {
		cardmarket: 4330
	}
}

export default set
