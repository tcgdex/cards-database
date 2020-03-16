import Set from '@tcgdex/sdk/interfaces/Set'

const year = "2013"

const set: Set = {
	name: {
		fr: `Collection Macdonald ${year}`,
	},
	expansionCode: "mc",
	code: `${year}bw`,

	cardCount: {
		total: 12,
		official: 12
	},

	releaseDate: `${year}-11-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	availability: {
		en: false,
	}
}

export default set
