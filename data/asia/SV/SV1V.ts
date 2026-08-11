import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV1V',

	name: {
		'ja-jp': 'バイオレットex',
		'ko-kr': '바이올렛ex',
		'zh-tw': '紫ex',
		'id-id': 'Violet ex',
		'th-th': 'ไวโอเล็ต ex'
	},

	serie: serie,

	cardCount: {
		official: 78
	},

	releaseDate: {
		'ja-jp': '2023-01-20',
		'zh-tw': '2023-02-03',
		'id-id': '2023-03-03',
		'th-th': '2023-02-24'
	},

	thirdParty: {
		cardmarket: 5217
	}
}

export default set
