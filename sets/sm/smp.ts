import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Promos",
		fr: "Promos",
	},
	code: "smp",
	expansionCode: "sm",
	tcgoCode: "PR-SM",

	cardCount: {
		total: 238,
		official: 236
	},

	api: "p-sm",

	releaseDate: "2017-02-03",
	// releaseDate: "2016-11-18"

	legal: {
		standard: true,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/smp/symbol",
		logo: "https://assets.tcgdex.net/en/sm/smp/logo"
	}
}

export default set
