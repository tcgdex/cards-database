import { Set } from '../../interfaces'
import serie from '../XY'

const g1: Set = {
	id: "g1",

	name: {
		en: "Generations",
		fr: "Générations",
		es: "Generaciones",
		it: "Generazioni",
		de: "Generationen",
		pt: "Gerações"
	},

	serie: serie,
	tcgOnline: "GEN",

	cardCount: {
		official: 83
	},

	subsets: {
		RC: {
			name: {
				en: "Radiant Collection",
				fr: "Radiant Collection"
			},
			cardCount: {
				official: 32
			}
		}
	},

	releaseDate: "2016-02-22",

	abbreviations: {
		official: "GEN",
		fr: "GEN"
	},

	thirdParty: {
		cardmarket: 1693,
		tcgplayer: 1728
	}
}

export default g1
