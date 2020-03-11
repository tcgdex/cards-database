import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Dragon Vault",
		fr: "Coffre des Dragons",
	},
	code: "dv1",
	expansionCode: "bw",
	tcgoCode: "DRV",

	cardCount: {
		total: 21,
		official: 20
	},

	api: "1-dragon-vault",

	releaseDate: "2012-10-05",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/bw/dv1/symbol",
		logo: "https://assets.tcgdex.net/en/sets/bw/dv1/logo"
	}
}

export default set
