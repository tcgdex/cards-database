import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Flipper Splash",
				'fr-fr': "Koud'palme",
				'de-de': "Flipper Splash"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Migraine",
				'fr-fr': "Maud'krâne",
				'de-de': "Migraine"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, Psykokwak est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although possessed of great mental powers, it doesn't know how to use them.",
		'fr-fr': "Bien que possédant d'immenses pouvoirs mentaux, il ne sait pas les utiliser."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274731,
				tcgplayer: 88433
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274731,
				tcgplayer: 88433
			}
		}
	]
}

export default card
