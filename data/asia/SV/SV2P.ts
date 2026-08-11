import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV2P',

	name: {
		'ja-jp': 'スノーハザード',
		'ko-kr': '스노해저드',
		'zh-tw': '冰雪險境',
		'id-id': 'Mara Bahaya Salju',
		'th-th': 'สโนว์ฮาซาร์ด'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	releaseDate: {
		'ja-jp': '2023-04-14',
		'zh-tw': '2023-04-28',
		'id-id': '2023-06-30',
		'th-th': '2023-06-30'
	},

	thirdParty: {
		cardmarket: 5314
	}
}

export default set
