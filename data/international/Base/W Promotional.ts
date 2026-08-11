import { Set } from 'models/database/set'
import serie from '../Base'

/**
 * @deprecated
 * Will be removed in V3
 */
const wp: Set = {
	id: "wp",

	name: {
		'en-us': "W Promotional",
		'fr-fr': "W Promotional",
		'it-it': "Carte Promo Wizards"
	},

	serie: serie,

	cardCount: {
		official: 7
	},

	releaseDate: "1999-09-01"
}

export default wp
