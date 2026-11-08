import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		'en-us': "It spouts poison spores from the top of its head. These spores cause pain all over if inhaled."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'de-de': "Samenbomben",
			'es-es': "Bomba Germen",
			'pt-br': "Bomba de Sementes",
			'it-it': "Semebomba"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582032,
				tcgplayer: 253074
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582032,
				tcgplayer: 253074
			}
		},
	],
}

export default card
