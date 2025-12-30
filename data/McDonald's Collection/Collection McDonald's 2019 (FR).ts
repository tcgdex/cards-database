import { Set } from '../../interfaces'
import serie from '../McDonald\'s Collection'

const set: Set = {
	id: "2019sm-fr",

	name: {
		// French-only product; English name matches folder for compiler resolution.
		en: "Collection McDonald's 2019 (FR)",
		fr: "Collection McDonald's 2019"
	},

	serie: serie,

	cardCount: {
		official: 40
	},

	releaseDate: "2019-10-30"
}

export default set
