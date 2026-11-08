import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S8',

	name: {
		'ja-jp': 'フュージョンアーツ',
		'ko-kr': '퓨전아츠',
		'zh-tw': '匯流藝術',
		'id-id': 'Teknik Fusion',
		'th-th': 'ฟิวชันอาร์ต'
	},

	serie: serie,

	cardCount: {
		official: 100
	},

	releaseDate: {
		'ja-jp': '2021-09-24',
		'zh-tw': '2021-10-01',
		'id-id': '2022-01-21',
		'th-th': '2021-11-26'
	},

	thirdParty: {
		cardmarket: 4360
	}
}

export default set
