import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [338],
	set: Set,

	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98365
	}
}

export default card