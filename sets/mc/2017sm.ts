import Set from '@tcgdex/sdk/interfaces/Set'

const year = "2017"

const set: Set = {
	name: {
		en: `Macdonald's Collection ${year}`,
		fr: `Collection Macdonald ${year}`,
	},
	expansionCode: "mc",
	code: `${year}sm`,

	cardCount: {
		total: 12,
		official: 12
	},

	releaseDate: `${year}-08-03`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
