import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [270],
	set: Set,

	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'it-it': "Lotad",
		'pt-br': "Lotad",
		'de-de': "Loturzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98332
	}
}

export default card