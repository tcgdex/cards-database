import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mina Nakai",

	description: {
		'en-us': "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582498,
				tcgplayer: 253261
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582498,
				tcgplayer: 253261
			}
		},
	],
}

export default card
