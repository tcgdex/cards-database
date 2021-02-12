import Set from '@tcgdex/sdk/interfaces/Set'

const year = "2021"

const set: Set = {
	name: {
		en: `Macdonald's Collection ${year}`,
		// fr: `Collection Macdonald ${year}`,
	},
	expansionCode: "mc",
	code: `${year}swsh`,

	cardCount: {
		total: 25,
		official: 25
	},

	releaseDate: `${year}-02-09`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
