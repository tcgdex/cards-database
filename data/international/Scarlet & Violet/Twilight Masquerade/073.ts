import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		'en-us': "Tadbulb",
		'fr-fr': "Têtampoule",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It floats using the electricity stored in its body. When thunderclouds are around, Tadbulb will float higher off the ground.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769247,
				tcgplayer: 550117
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769247,
				tcgplayer: 550117
			}
		},
	],

	illustrator: "nisimono",

}

export default card