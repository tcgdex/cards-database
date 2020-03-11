import Set from '@tcgdex/sdk/interfaces/Set'

const year = "2012"

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

	releaseDate: `${year}-06-15`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
