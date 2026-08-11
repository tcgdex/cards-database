import { Set } from 'models/database/set'
import serie from '../SM'

const set: Set = {
	id: 'SM11b',
	name: {
		'ja-jp': 'ドリームリーグ',
		'ko-kr': '드림리그'
	},

	serie: serie,

	cardCount: {
		official: 49
	},
	releaseDate: '2019-08-02',

	thirdParty: {
		cardmarket: 3806
	}
}

export default set
