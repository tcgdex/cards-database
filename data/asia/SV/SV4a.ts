import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV4a',

	name: {
		'ja-jp': 'レイジングサーフ',
		'ko-kr': '샤이니트레저 ex',
		'zh-tw': '閃色寶藏ex',
		'id-id': 'Harta Berkilau ex',
		'th-th': 'ไชนีเทรเชอร์ex'
	},

	serie: serie,

	cardCount: {
		official: 190
	},

	releaseDate: {
		'ja-jp': '2023-12-01',
		'zh-tw': '2023-12-22',
		'th-th': '2024-01-26',
		'id-id': '2024-01-26'
	},

	thirdParty: {
		cardmarket: 5432
	}
}

export default set
