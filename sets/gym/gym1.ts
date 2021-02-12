import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: "Gym Heroes",
	code: "gym1",
	expansionCode: "gym",
	tcgoCode: "G1",

	cardCount: {
		total: 132,
		official: 132
	},

	releaseDate: "2000-08-14",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/gym/gym1/symbol",
		logo: "https://assets.tcgdex.net/en/gym/gym1/logo"
	},

	availability: {
		fr: false
	}
}

export default set
