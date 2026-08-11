import { Set } from 'models/database/set'
import serie from '../S'

const set: Set = {
	id: 'S5a',
	name: {
		'ja-jp': '双璧のファイター',
		'ko-kr': '쌍벽의 파이터',
		'zh-tw': '雙璧戰士',
		'id-id': 'Dua Pilar Petarung',
		'th-th': 'สองยอดนักสู้'
	},

	serie: serie,

	cardCount: {
		official: 70
	},
	releaseDate: {
		'ja-jp': '2021-03-19',
		'zh-tw': '2021-04-02',
		'th-th': '2021-04-30',
		'id-id': '2021-07-02'
	},

	thirdParty: {
		cardmarket: 3751
	}
}

export default set
