import Set from '../../interfaces/Set'

const year = "2018"

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

	releaseDate: `${year}-10-19`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set
