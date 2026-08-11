import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S5R',
	name: {
		'ja-jp': '連撃マスター',
		'ko-kr': '연격마스터',
		'zh-tw': '連撃大師',
		'id-id': 'Master Serangan Beruntun',
		'th-th': 'มาสเตอร์จู่โจมต่อเนื่อง'
	},

	serie: serie,

	cardCount: {
		official: 70
	},

	releaseDate: {
		'ja-jp': '2021-01-22',
		'zh-tw': '2021-01-29',
		'id-id': '2021-05-21',
		'th-th': '2021-03-26'
	},

	thirdParty: {
		cardmarket: 3712
	}
}

export default set
