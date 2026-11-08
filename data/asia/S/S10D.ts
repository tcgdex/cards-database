import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S10D',

	name: {
		'ja-jp': 'タイムゲイザー',
		'ko-kr': '타임게이저',
		'zh-tw': '時間觀察者',
		'id-id': 'Pengamat Waktu',
		'th-th': 'เจ้าแห่งกาลเวลา'
	},

	serie: serie,

	cardCount: {
		official: 67
	},

	releaseDate: {
		'ja-jp': '2022-04-08',
		'zh-tw': '2022-04-22',
		'id-id': '2022-07-29',
		'th-th': '2022-05-27'
	},

	thirdParty: {
		cardmarket: 4973
	}
}

export default set
