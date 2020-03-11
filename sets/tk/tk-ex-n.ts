import Set from '@tcgdex/sdk/interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `EX trainer Kit 2 (Ninun)`,
		fr: `EX Kit dresseur (Négapi)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 12,
		official: 12
	},

	releaseDate: `2006-03-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: `https://assets.tcgdex.net/univ/tk/${code}/symbol`
	},
}

export default set
