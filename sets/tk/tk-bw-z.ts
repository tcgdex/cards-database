import Set from '@tcgdex/sdk/interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `HS trainer Kit (Zoroark)`,
		fr: `HS Kit du dresseur (Zoroark)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 30,
		official: 30
	},

	releaseDate: `2011-09-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: `https://assets.tcgdex.net/univ/tk/${code}/symbol`
	},
}

export default set
