import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [522],
	set: Set,

	name: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118816
	}
}

export default card