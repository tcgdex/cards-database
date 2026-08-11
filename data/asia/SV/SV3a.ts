import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV3a',

	name: {
		'ja-jp': 'レイジングサーフ',
		'ko-kr': '레이징서프',
		'zh-tw': '激狂駭浪',
		'th-th': 'คลื่นพิโรธ'
	},

	serie: serie,

	cardCount: {
		official: 62
	},

	releaseDate: {
		'ja-jp': '2023-09-22',
		'zh-tw': '2023-09-29',
		'th-th': '2023-10-27',
		'id-id': '2023-10-27'
	},

	thirdParty: {
		cardmarket: 5432
	}
}

export default set
