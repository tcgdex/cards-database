import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S10P',

	name: {
		'ja-jp': 'スペースジャグラー',
		'ko-kr': '스페이스저글러',
		'zh-tw': '空間魔術師',
		'id-id': 'Penyulap Ruang',
		'th-th': 'จอมมายาผ่ามิติ'
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
		cardmarket: 4974
	}
}

export default set
