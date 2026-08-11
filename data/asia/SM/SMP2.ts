import { Set } from 'models/database/set'
import serie from '../SM'

const set: Set = {
	id: 'SMP2',
	name: {
		'ja-jp': '名探偵ピカチュウ',
		'ko-kr': '명탐정 피카츄'
	},

	serie: serie,

	cardCount: {
		official: 24
	},
	releaseDate: '2019-04-26',

	thirdParty: {
		cardmarket: 3826
	}
}

export default set
