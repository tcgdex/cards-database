import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'de-de': "Smogon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],

			name: {
				'en-us': "Poison Gas",
				'fr-fr': "Gaz toxik",
				'de-de': "Poison Gas"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. if heads, the Defending Pokémon is now Poisoned."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "First discovered in a weapons factory, this Pokémon can now be found almost anywhere.",
		'fr-fr': "Découvert en premier lieu dans une usine d'armement, on trouve ce Pokémon presque partout."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274111,
				tcgplayer: 86491
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274111,
				tcgplayer: 86491
			}
		}
	]
}

export default card
