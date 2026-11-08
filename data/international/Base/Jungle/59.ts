import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		46,
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
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Spore",
				'fr-fr': "Spore",
				'de-de': "Pilzspore"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon ist jetzt schlafend."
			},

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
		'en-us': "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
		'fr-fr': "Les champignons sur son dos se nourrissent des nutriments de leur hôte insectoïde."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273856,
				tcgplayer: 45162
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273856,
				tcgplayer: 45162
			}
		}
	],
}

export default card
