import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh125: Set = {
	id: "swsh12.5",

	name: {
		'en-us': "Crown Zenith",
		'fr-fr': "Zénith Suprême",
		'es-es': "Cenit Supremo",
		'it-it': "Zenit Regale",
		'de-de': "Zenit der Könige",
		'pt-br': "Realeza Absoluta"
	},

	serie: serie,

	cardCount: {
		official: 159
	},

	releaseDate: "2023-01-20",

	abbreviations: {
		official: "CRZ",
		'fr-fr': "ZEN"
	},

	thirdParty: {
		cardmarket: 5201,
		tcgplayer: 17688
	}
}

export default swsh125
