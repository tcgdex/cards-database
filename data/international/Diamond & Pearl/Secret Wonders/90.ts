import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'de-de': "Hoppspross"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cottonweed",
				'fr-fr': "Mauvaise herbe de coton",
				'de-de': "Löwenzahn"
			},
			effect: {
				'en-us': "If Hoppip has any Grass Energy attached to it, the Retreat Cost for Hoppip is 0.",
				'fr-fr': "Si Granivol possède de l'Énergie Grass, son Coût de retraite est de 0.",
				'de-de': "Wenn an Hoppspross mindestens 1 -Energie angelegt ist, hat Hoppspross Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Hover Heal",
				'fr-fr': "Guérison flottante",
				'de-de': "Heilgleiten"
			},
			effect: {
				'en-us': "Remove all Special Conditions from Hoppip.",
				'fr-fr': "Retirez à Granivol tous ses États Spéciaux.",
				'de-de': "Entferne alle Speziellen Zustände von Hoppspross."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It drifts on winds. It is said that when HOPPIP gather in fields and mountains, spring is on the way.",
	},

	thirdParty: {
		cardmarket: 277843,
		tcgplayer: 86181
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
