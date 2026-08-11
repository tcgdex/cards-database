import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'SH',
	name: {
		'th-th': 'โปเกมอนเทรดดิ้งการ์ดเกม ชุดแฟมิลีแฮปปี้',
		'zh-tw': '寶可夢卡牌家庭組合'
	},

	serie: serie,

	cardCount: {
		official: 38 // TODO: find a way to separate with the zh-tw that has 53 cards officialy
	},
	releaseDate: {
		'th-th': '2021-11-26',
		'zh-tw': '2021-06-28'
	}
}

export default set
