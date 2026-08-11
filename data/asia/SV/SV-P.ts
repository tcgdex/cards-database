import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV-P',
	name: {
		'ja-jp': 'スカーレット&バイオレット プロモカード',
		'zh-tw': '特典卡 朱&紫',
		'th-th': 'การ์ดโปรโม สการ์เล็ต แอนด์ ไวโอเล็ต',
		'id-id': 'Kartu Promo'
	},

	serie: serie,

	cardCount: {
		official: 0
	},
	releaseDate: {
		'ja-jp': '2022-11-29',
		'zh-tw': '2023-01-26',
		'id-id': '2023-03-03',
		'th-th': '2023-02-24'
	}
}

export default set
