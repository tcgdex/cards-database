import Set from '@tcgdex/sdk/interfaces/Set'
import tk from '../../expansions/tk'

import path from 'path'
// Card in maxi sizes

const code = path.basename(__filename).split(".")[0]

const set: Set = {
	name: {
		en: `XY trainer Kit (Wigglytuff)`,
		fr: `XY Kit du dresseur (Grodoudou)`,
	},
	expansion: tk,
	code: code,

	cardCount: {
		total: 30,
		official: 30
	},

	releaseDate: `2014-11-01`,

	legal: {
		standard: false,
		expanded: false,
	},

	availability: {
		fr: false
	}
}

export default set
