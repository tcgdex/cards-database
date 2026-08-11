import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'de-de': "Myrapla"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-spore",
				'de-de': "Stachelspore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'de-de': "Klecks"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Oddish.",
				'fr-fr': "Retirez à Mystherbe 1 marqueur de dégât.",
				'de-de': "Entferne 1 Schadensmarke von Myrapla."
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

	retreat: 1,

	description: {
		'en-us': "It often plants its root feet in the ground during the day and sows seeds as it walks about at night.",
		'fr-fr': "En journée, il plante ses piedsracines dans le sol. La nuit, il se promène en semant des graines."
	},

	thirdParty: {
		cardmarket: 278260,
		tcgplayer: 87843
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
