import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [407],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Roselia"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe",
				'de-de': "Zerschneider"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Seed",
				'fr-fr': "Graine poison",
				'de-de': "Giftsamen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "Each of its hands contains different toxins, but both hands can jab with near-fatal power."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88829,
				cardmarket: 278772
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278731,
				tcgplayer: 88829
			}
		},
	],

}

export default card
