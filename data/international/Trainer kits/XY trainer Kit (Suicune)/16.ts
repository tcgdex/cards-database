import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [393],
	set: Set,

	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'es-es': "Piplup",
		'it-it': "Piplup",
		'pt-br': "Piplup",
		'de-de': "Plinfa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118853
	}
}

export default card