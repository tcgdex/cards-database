import { Set } from '../../interfaces'
import serie from '../McDonald\'s Collection'

const s2019sm: Set = {
	id: "2019sm",

	name: {
		en: "McDonald's Collection 2019",
		// No French here: French-only set is represented by \"Promo McDonald's 2019\"
		it: "McDonald's Collection 2019",
		de: "McDonald’s Kollektion 2019",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2019-10-15",

	abbreviations: {
		official: "MCD19"
	},

	thirdParty: {
		tcgplayer: 2555
	}
}

export default s2019sm
