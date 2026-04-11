import { Set } from '../../interfaces'
import serie from '../Sword & Shield'

const set: Set = {
	id: "swsh12",

	name: {
		en: "Silver Tempest",
		fr: "Tempête Argentée",
		es: "Tempestad Plateada",
		it: "Tempesta Argentata",
		de: "Silberne Sturmwinde",
		pt: "Tempestade Prateada"
	},

	serie: serie,

	cardCount: {
		official: 195
	},

	releaseDate: "2022-11-11",

	abbreviations: {
		official: "SIT",
		fr: "EB12"
	},
	searchAliases: [
		"SWSH12"
	],


	thirdParty: {
		cardmarket: 5142,
		tcgplayer: 3170
	}
}

export default set
