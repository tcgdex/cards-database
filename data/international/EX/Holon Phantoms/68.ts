import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Lileep δ",
		'fr-fr': "Lilia δ",
		'de-de': "Liliep"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		345,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Root Fossil",
		'fr-fr': "Fossile racine"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Poison Tentacles",
				'fr-fr': "Tentacules empoisonnées",
				'de-de': "Giftige Tentakel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de boue",
				'de-de': "Lehmschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277038
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
