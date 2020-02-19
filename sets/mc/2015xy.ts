import Set from '../../interfaces/Set'

const year = "2015"

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

	releaseDate: `${year}-11-27`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
