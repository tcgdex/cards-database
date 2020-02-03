import Set from '../../interfaces/Set'

const year = "2019"

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

	releaseDate: `${year}-10-15`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
