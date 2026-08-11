import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV5M',

	name: {
		'ja-jp': 'サイバージャッジ',
		'ko-kr': '사이버저지',
		'zh-tw': '異度審判',
		'th-th': 'ตุลาการไซเบอร์'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	releaseDate: {
		'ja-jp': '2024-01-26',
		'zh-tw': '2024-02-02',
		'th-th': '2024-02-23'
	},

	thirdParty: {
		cardmarket: 5574
	}
}

export default set
