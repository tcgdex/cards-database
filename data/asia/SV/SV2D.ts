import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV2D',

	name: {
		'ja-jp': 'クレイバースト',
		'ko-kr': '클레이버스트',
		'zh-tw': '碟旋暴擊',
		'id-id': 'Letusan Tanah',
		'th-th': 'เคลย์เบิสต์'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	releaseDate: {
		'ja-jp': '2023-04-14',
		'zh-tw': '2023-04-28',
		'id-id': '2023-06-30',
		'th-th': '2023-06-30'
	},

	thirdParty: {
		cardmarket: 5315
	}
}

export default set
