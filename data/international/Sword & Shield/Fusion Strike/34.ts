import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "otumami",

	description: {
		'en-us': "Its body is made of magma. If it doesn't keep moving, its body will cool and harden."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'de-de': "Glühende Kohlen",
			'es-es': "Carbón Activado",
			'pt-br': "Carvão Vivo",
			'it-it': "Carboni Ardenti"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'es-es': "Llama",
			'pt-br': "Chama",
			'it-it': "Fiammata"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582168,
				tcgplayer: 253131
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582168,
				tcgplayer: 253131
			}
		},
	],
}

export default card
