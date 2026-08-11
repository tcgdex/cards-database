import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'es-mx': "Nickit",
		'de-de': "Kleptifux",
		'it-it': "Nickit",
		'pt-br': "Nickit"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	dexId: [827],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'es-mx': "Mordisquear",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída"
		},

		cost: ["Darkness"],

		damage: 10
	}, {
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'es-mx': "Patada Trasera",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro"
		},

		cost: ["Darkness", "Colorless"],

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895838,
				tcgplayer: 704810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895838,
				tcgplayer: 704810
			}
		},
	],
}

export default card
