import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV4M',

	name: {
		'ja-jp': '未来の一閃',
		'ko-kr': '미래의 일섬',
		'zh-tw': '未來閃光',
		'th-th': 'ประกายแสงจากอนาคต'
	},

	serie: serie,

	cardCount: {
		official: 66
	},

	releaseDate: {
		'ja-jp': '2023-10-27',
		'zh-tw': '2023-11-10'
	},

	thirdParty: {
		cardmarket: 5479
	}
}

export default set
