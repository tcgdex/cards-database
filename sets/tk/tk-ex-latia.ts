import Set from '@tcgdex/sdk/interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `EX trainer Kit (Latias)`,
		fr: `EX Kit dresseur (Latias)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 10,
		official: 10
	},

	releaseDate: `2004-07-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: `https://assets.tcgdex.net/univ/tk/${code}/symbol`
	},
}

export default set
