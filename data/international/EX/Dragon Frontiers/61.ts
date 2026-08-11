import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Ralts δ",
		'fr-fr': "Tarsal δ",
		'de-de': "Trasla"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Calm Mind",
				'fr-fr': "Plénitude",
				'de-de': "Gedankengut"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Ralts.",
				'fr-fr': "Retirez à Tarsal 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Trasla."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Will-o'-the-wisp",
				'fr-fr': "Feu follet",
				'de-de': "Irrlicht"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277266
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
