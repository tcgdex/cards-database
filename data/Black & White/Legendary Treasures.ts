import { Set } from '../../interfaces'
import serie from '../Black & White'

const bw11: Set = {
	id: "bw11",

	name: {
		en: "Legendary Treasures",
		// fr: "Trésors Légendaires", // ONLY PTCGO
		pt: "Tesouros Lendários"
	},

	serie: serie,
	tcgOnline: "LTR",

	cardCount: {
		official: 113
	},

	subsets: {
		RC: {
			name: {
				en: "Radiant Collection",
				fr: "Radiant Collection"
			},
			cardCount: {
				official: 25
			}
		}
	},

	releaseDate: "2013-11-06",

	abbreviations: {
		official: "LTR"
	},

	thirdParty: {
		cardmarket: 1581,
		tcgplayer: 1409
	}
}

export default bw11
