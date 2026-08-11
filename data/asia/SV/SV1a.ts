import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV1a',

	name: {
		'ja-jp': 'トリプレットビート',
		'ko-kr': '트리플렛비트',
		'zh-tw': '三連音爆',
		'id-id': 'Hantaman Triplet',
		'th-th': 'ทริปเปิลบีต'
	},

	serie: serie,

	cardCount: {
		official: 73
	},

	releaseDate: {
		'ja-jp': '2023-03-10',
		'zh-tw': '2023-03-24',
		'id-id': '2023-04-21',
		'th-th': '2023-04-28'
	},

	thirdParty: {
		cardmarket: 5257
	}
}

export default set
