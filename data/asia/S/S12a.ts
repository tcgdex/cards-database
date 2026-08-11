import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S12a',

	name: {
		'ja-jp': 'VSTARユニバース',
		'ko-kr': 'VSTAR 유니버스',
		'zh-tw': '天地萬物VSTAR',
		'th-th': 'จักรวาลแห่งVSTAR',
		'id-id': 'VSTAR Semesta',
	},

	serie: serie,

	cardCount: {
		official: 172
	},

	releaseDate: {
		'ja-jp': '2022-12-02',
		'id-id': '2022-12-23',
		'th-th': '2022-12-23'
		// TODO: find the release dates
	},

	thirdParty: {
		cardmarket: 5198
	}
}

export default set
