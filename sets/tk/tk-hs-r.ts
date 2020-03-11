import Set from '@tcgdex/sdk/interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `HS trainer Kit (Raichu)`,
		fr: `HS Kit du dresseur (Raichu)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 30,
		official: 30
	},

	releaseDate: `2010-05-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: `https://assets.tcgdex.net/univ/tk/${code}/symbol`
	},
}

export default set
