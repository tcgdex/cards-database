import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: "Team Rocket",
	code: "base5",
	expansionCode: "base",
	tcgoCode: "TR",

	cardCount: {
		total: 83,
		official: 82
	},

	releaseDate: "2000-04-24",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/base/base5/symbol",
		logo: "https://assets.tcgdex.net/en/base/base5/logo"
	}
}

export default set
