import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S6H',

	name: {
		'ja-jp': '白銀のランス',
		'ko-kr': '백은의 랜스',
		'zh-tw': '銀白戰槍',
		'id-id': 'Ganjur Salju Perak',
		'th-th': 'หอกหิมะขาว'
	},

	serie: serie,

	cardCount: {
		official: 70
	},

	releaseDate: {
		'ja-jp': '2021-04-23',
		'zh-tw': '2021-05-07',
		'th': '2021-05-28',
		'id-id': '2021-10-01'
	},

	thirdParty: {
		cardmarket: 4173
	}
}

export default set
