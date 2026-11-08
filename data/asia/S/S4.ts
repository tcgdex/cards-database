import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S4',
	name: {
		'ja-jp': '仰天のボルテッカー',
		'ko-kr': '앙천의 볼트태클',
		'zh-tw': '驚天伏特攻擊',
	},

	serie: serie,

	cardCount: {
		official: 100
	},
	releaseDate: {
		'ja-jp': '2020-09-18',
		'zh-tw': '2020-10-09'
	},

	thirdParty: {
		cardmarket: 3479
	}
}

export default set
