import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98364
	}
}

export default card