import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm2: Set = {
	id: "sm2",

	name: {
		'en-us': "Guardians Rising",
		'fr-fr': "Gardiens Ascendants",
		'es-es': "Albor de Guadianes",
		'it-it': "Guardiani Nascenti",
		'de-de': "Stunde der Wächter",
		'pt-br': "Guardiões Ascendentes"
	},

	serie: serie,
	tcgOnline: "GRI",

	cardCount: {
		official: 145
	},

	releaseDate: "2017-05-05",

	abbreviations: {
		official: "GRI",
		'fr-fr': "GAS"
	},

	thirdParty: {
		cardmarket: 1800,
		tcgplayer: 1919
	}
}

export default sm2
