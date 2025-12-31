import { Set } from '../../interfaces'
import serie from '../McDonald\'s Collection'

const set: Set = {
	id: "2018sm-fr",

	name: {
		// French-only product; English name matches folder for compiler resolution.
		en: "Collection McDonald's 2018 (FR)",
		fr: "Collection McDonald's 2018"
	},

	serie: serie,

	cardCount: {
		official: 40
	},

	releaseDate: "2018-06-13",

	thirdParty: {
		cardmarket: 2361
	}
}

export default set
