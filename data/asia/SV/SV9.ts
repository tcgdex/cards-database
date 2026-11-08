import { Set } from 'models/database/set'
import serie from '../SV'

const set: Set = {
	id: 'SV9',

	name: {
		'ja-jp': 'バトルパートナーズ',
		"zh-cn": '對戰搭檔',
		"zh-tw": '對戰搭檔'
	},

	serie: serie,

	cardCount: {
		official: 100
	},

	releaseDate: {
		'ja-jp': '2025-01-24',
		"zh-cn": '2025-02-07',
		"zh-tw": '2025-02-07'
	},

	thirdParty: {
		cardmarket: 5996
	}
}

export default set
