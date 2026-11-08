import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh12: Set = {
	id: "swsh12",

	name: {
		'en-us': "Silver Tempest",
		'fr-fr': "Tempête Argentée",
		'es-es': "Tempestad Plateada",
		'it-it': "Tempesta Argentata",
		'de-de': "Silberne Sturmwinde",
		'pt-br': "Tempestade Prateada"
	},

	serie: serie,

	cardCount: {
		official: 195
	},

	releaseDate: "2022-11-11",

	abbreviations: {
		official: "SIT",
		'fr-fr': "TAR"
	},

	thirdParty: {
		cardmarket: 5142,
		tcgplayer: 3170
	}
}

export default swsh12
