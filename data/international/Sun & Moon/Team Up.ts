import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm9: Set = {
	id: "sm9",

	name: {
		'en-us': "Team Up",
		'fr-fr': "Duo de Choc",
		'es-es': "Union de Aliados",
		'it-it': "Gioco di Squadra",
		'de-de': "Teams Sind Trumpf",
		'pt-br': "União de Aliados"
	},

	serie: serie,
	tcgOnline: "TEU",

	cardCount: {
		official: 181
	},

	releaseDate: "2019-01-31",

	abbreviations: {
		official: "TEU",
		'fr-fr': "DDC"
	},

	thirdParty: {
		cardmarket: 2407,
		tcgplayer: 2377
	}
}

export default sm9
