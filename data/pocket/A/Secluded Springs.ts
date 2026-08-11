import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A4a",

	name: {
		'en-us': "Secluded Springs",
		'de-de': "Verborgene Quelle",
		'es-es': "Manantial Oculto",
		'fr-fr': "Source Secrète",
		'it-it': "Sorgenti Recondite",
		'pt-br': "Nascentes Reclusas",
		'ko-kr': '미지의 수역',
		'ja-jp': '未知なる水域',
		'zh-tw': '未知水域',
		'zh-cn': '未知水域'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	boosters: {
		suicune: {
			name: {
				'en-us': 'Suicune themed booster pack' // still not sure how to name the boosters...
			}
		}
	},

	releaseDate: "2025-08-28"
}

export default set
