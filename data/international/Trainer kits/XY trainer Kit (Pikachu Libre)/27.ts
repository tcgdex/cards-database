import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [431],
	set: Set,

	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118799
	}
}

export default card