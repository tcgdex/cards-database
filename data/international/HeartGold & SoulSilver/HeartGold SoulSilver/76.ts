import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [46],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge Claw",
				'fr-fr': "Griffe Damoclès",
				'de-de': "Zweischneidige Klaue"
			},
			effect: {
				'en-us': "Paras does 10 damage to itself.",
				'fr-fr': "Paras s’inflige 10 dégâts.",
				'de-de': "Paras fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As its body grows large, large mushrooms named tochukaso start sprouting out of its back."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87953,
				cardmarket: 279048
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87953,
				cardmarket: 279048
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"]
		},
	],

}

export default card
