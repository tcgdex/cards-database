import Set from '@tcgdex/sdk/interfaces/Set'

const year = "2014"

const set: Set = {
	name: {
		en: `Macdonald's Collection ${year}`,
		fr: `Collection Macdonald ${year}`,
	},
	expansionCode: "mc",
	code: `${year}xy`,

	cardCount: {
		total: 12,
		official: 12
	},

	releaseDate: `${year}-05-23`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
