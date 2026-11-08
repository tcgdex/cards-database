import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "P-A",

	name: {
		'de-de': "PROMO-A",
		'en-us': "Promos-A",
		'es-es': "Promo-A",
		'fr-fr': "Promo-A",
		'it-it': "Promo-A",
		'ko-kr': "Promo-A",
		'pt-br': "Promo-A"
	},

	serie: serie,

	cardCount: {
		official: 0
	},

	boosters: {
		vol1: {
			name : {
				'en-us': 'Vol. 1'
			}
		},
		vol2: {
			name : {
				'en-us': 'Vol. 2'
			}
		},
		vol3: {
			name : {
				'en-us': 'Vol. 3'
			}
		},
		vol4: {
			name : {
				'en-us': 'Vol. 4'
			}
		},
		vol5: {
			name : {
				'en-us': 'Vol. 5'
			}
		},
		vol6: {
			name : {
				'en-us': 'Vol. 6'
			}
		},
		vol7: {
			name : {
				'en-us': 'Vol. 7'
			}
		},
		vol8: {
			name : {
				'en-us': 'Vol. 8'
			}
		},
		vol9: {
			name : {
				'en-us': 'Vol. 9'
			}
		},
		vol10: {
			name : {
				'en-us': 'Vol. 10'
			}
		}
	},

	releaseDate: "2024-10-30"
}

export default set
