import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'

const set: Set = {
	name: "Promos",

	expansion: swsh,

	code: "swshp",

	cardCount: {
		total: 107,
		official: 107
	},

	releaseDate: "2019-11-15",

	legal: {
		standard: false,
		expanded: false
	}
}

export default set
