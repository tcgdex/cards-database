import { Set } from 'models/database/set'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me04",

	name: {
		'de-de': "Wachsendes Chaos",
		'en-us': "Chaos Rising",
		'es-es': "Caos Creciente",
		'es-mx': 'Caos Creciente',
		'fr-fr': "Chaos Ascendant",
		'it-it': "Caos Nascente",
		'pt-br': "Caos Ascendente"
	},

	serie: serie,

	cardCount: {
		official: 86
	},

	releaseDate: "2026-05-22",

	abbreviations: {
		official: "CRI"
	},

	thirdParty: {
		tcgplayer: 24655,
		cardmarket: 6517
	}
}

export default set
