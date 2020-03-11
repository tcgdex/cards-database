import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'

const set: Set = {
	name: {
		en: "Promos",
		fr: "Promos"
	},

	expansion: swsh,

	code: "swshp",
	// tcgoCode

	cardCount: {
		total: 13,
		official: 13
	},

	format: "SWSH[000]",

	releaseDate: "2019-11-15",

	legal: {
		standard: true,
		expanded: true
	}
}

export default set
