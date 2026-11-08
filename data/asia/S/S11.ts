import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S11',

	name: {
		'ja-jp': 'ロストアビス',
		'ko-kr': '트리플렛비트',
		'zh-tw': '三連音爆',
		'id-id': 'Hantaman Triplet',
		'th-th': 'ทริปเปิลบีต'
	},

	serie: serie,

	cardCount: {
		official: 100
	},

	releaseDate: {
		'ja-jp': '2022-07-15',
		'zh-tw': '2022-07-29',
		'th-th': '2022-08-26',
		'id-id': '2022-09-23'
	},

	thirdParty: {
		cardmarket: 5257
	}
}

export default set
