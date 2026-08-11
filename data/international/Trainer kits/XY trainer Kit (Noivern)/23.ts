import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}]
}

export default card