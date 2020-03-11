import Set from '@tcgdex/sdk/interfaces/Set'

const year = "2011"

const set: Set = {
	name: {
		en: `Macdonald's Collection ${year}`,
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
