import { Set } from '../../interfaces'
import serie from '../Base'

const base5: Set = {
	id: "base5",

	name: {
		en: "Team Rocket",
		fr: "Team Rocket"
	},

	serie: serie,
	tcgOnline: "TR",

	cardCount: {
		total: 83,
		official: 82
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2000-04-24",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default base5
