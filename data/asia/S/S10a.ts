import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S10a',

	name: {
		'ja-jp': 'ダークファンタズマ',
		'ko-kr': '다크판타스마',
		'zh-tw': '黑暗亡靈',
		'id-id': 'Fantom Kegelapan',
		'th-th': 'อันธการลวงตา'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	releaseDate: {
		'ja-jp': '2022-05-13',
		'zh-tw': '2022-05-27',
		'id-id': '2022-08-26',
		'th-th': '2022-07-29'
	},

	thirdParty: {
		cardmarket: 5048
	}
}

export default set
