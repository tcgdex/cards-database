import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S12',

	name: {
		'ja-jp': 'パラダイムトリガー',
		'ko-kr': '패러다임트리거',
		'zh-tw': '思維激盪',
		'id-id': 'Pemicu Paradigma',
		'th-th': 'ปฐมบทแห่งยุคใหม่'
	},

	serie: serie,

	cardCount: {
		official: 98
	},

	releaseDate: {
		'ja-jp': '2022-10-21',
		'zh-tw': '2022-11-04',
		'th-th': '2022-11-25',
		'id-id': '2022-11-25'
	},

	thirdParty: {
		cardmarket: 5156
	}
}

export default set
