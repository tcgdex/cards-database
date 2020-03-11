import Set from '@tcgdex/sdk/interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `DP trainer Kit (Lucario)`,
		fr: `DP Kit dresseur (Lucario)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 12,
		official: 12
	},

	releaseDate: `2007-09-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: `https://assets.tcgdex.net/univ/tk/${code}/symbol`
	},
}

export default set
