import Set from '../../interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `XY trainer Kit (Latios)`,
		fr: `XY Kit du dresseur (Latios)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 30,
		official: 30
	},

	releaseDate: `2015-04-29`,

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: `https://assets.tcgdex.net/univ/tk/${code}/symbol`
	},
}

export default set
