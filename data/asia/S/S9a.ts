import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S9a',

	name: {
		'ja-jp': 'バトルリージョン',
		'ko-kr': '배틀리전',
		'zh-tw': '對戰地區',
		'id-id': 'Pertarungan Daerah',
		'th-th': 'พสุธามหายุทธ'
	},

	serie: serie,

	cardCount: {
		official: 67
	},

	releaseDate: {
		'ja-jp': '2022-02-25',
		'zh-tw': '2022-03-11',
		'th-th': '2022-04-29',
		'id-id': '2022-04-22'
	},

	thirdParty: {
		cardmarket: 4441
	}
}

export default set
