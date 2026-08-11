import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV1S',

	name: {
		'ja-jp': 'スカーレットex',
		'ko-kr': '스칼렛ex',
		'zh-tw': '朱ex',
		'id-id': 'Scarlet ex',
		'th-th': 'สการ์เล็ต ex'
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
		cardmarket: 5216
	}
}

export default set
