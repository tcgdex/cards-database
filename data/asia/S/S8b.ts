import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S8b',

	name: {
		'ja-jp': 'VMAXクライマックス',
		'ko-kr': 'VMAX 클라이맥스',
		'zh-tw': 'VMAX絕群壓軸',
		'id-id': 'VMAX Klimaks',
		'th-th': 'VMAX ไคลแมกซ์'
	},

	serie: serie,

	cardCount: {
		official: 184
	},

	releaseDate: {
		'ja-jp': '2021-12-03',
		'zh-tw': '2021-12-17',
		'id-id': '2022-01-21',
		'th-th': '2021-12-17'
	},

	thirdParty: {
		cardmarket: 4390
	}
}

export default set
