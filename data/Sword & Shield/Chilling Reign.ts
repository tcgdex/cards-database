import { Set } from '../../interfaces'
import serie from '../Sword & Shield'

const set: Set = {
	id: "swsh6",
	name: {
		en: "Chilling Reign",
		fr: "Règne de Glace",
		es: "Reinado Escalofriante"
,
	},
	serie: serie,


	cardCount: { // NOT confirmed
		total: 190,
		official: 190
	},

	releaseDate: "2021-06-18",

	legal: {
		standard: true,
		expanded: true
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default set
