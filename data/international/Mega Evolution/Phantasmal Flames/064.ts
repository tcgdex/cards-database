import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'es-mx': "Sandile",
		'de-de': "Ganovil",
		'it-it': "Sandile",
		'pt-br': "Sandile"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [551],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'es-mx': "Colisión",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'es-mx': "Patada Trasera",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It submerges itself in sand and moves as if swimming. This wise behavior keeps its enemies from finding it and maintains its temperature.",
	},

	illustrator: "Taiga Kasai",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857639,
				tcgplayer: 662225,
				cardtrader: 356848
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857639,
				tcgplayer: 662225,
				cardtrader: 356848
			}
		},
	],	
}

export default card
