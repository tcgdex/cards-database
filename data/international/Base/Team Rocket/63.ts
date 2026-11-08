import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'de-de': "Myrapla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Sleep Powder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Poisonpowder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			}

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
		'en-us': "It wanders around at night sowing its seeds to create more Oddishes.",
		'fr-fr': "Il vagabonde la nuit en semant ses graines pour créer d'autres Mystherbes."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274116,
				tcgplayer: 87837
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274116,
				tcgplayer: 87837
			}
		}
	]
}

export default card
