import Set from '../../interfaces/Set'

const set: Set = {
	name: {
		en: "Black & White",
		fr: "Noir & Blanc",
	},
	code: "bw1",
	expansionCode: "bw",
	tcgoCode: "BLW",

	cardCount: {
		total: 115,
		official: 114
	},

	api: "1-black-white",

	releaseDate: "2011-04-25",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/bw/bw1/symbol.png",
		logo: "https://assets.tcgdex.net/en/sets/bw/bw1/logo.png"
	}
}

export default set
