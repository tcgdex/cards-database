import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'de-de': "Bluzuk"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
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
				'en-us': "Gnaw",
				'fr-fr': "Rogne",
				'de-de': "Gnaw"
			},

			damage: 10,

		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Poison Barb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

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
		'en-us': "It possesses a type of radar, which it can use to find the insects it eats for food, even in pitch darkness.",
		'fr-fr': "Il possède une sorte de radar qu'il utilise pour trouver les insectes qu'il mange, même dans l'obscurité la plus totale."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274742,
				tcgplayer: 90305
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274742,
				tcgplayer: 90305
			}
		}
	]
}

export default card
