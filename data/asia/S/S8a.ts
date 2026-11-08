import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S8a',

	name: {
		'ja-jp': '25th アニバーサリーコレクション',
		'ko-kr': '25th Anniversary',
		'zh-tw': '25週年收藏款',
		'id-id': 'Koleksi Perayaan 25 Tahun',
		'th-th': 'คอลเลกชันฉลองครบรอบ 25 ปี'
	},

	serie: serie,

	cardCount: {
		official: 28
	},

	releaseDate: {
		'ja-jp': '2021-10-22',
		'zh-tw': '2021-10-20',
		'th-th': '2021-10-29',
		'id-id': '2021-12-15'
	},

	thirdParty: {
		cardmarket: 4345
	}
}

export default set
