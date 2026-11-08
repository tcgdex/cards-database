import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'de-de': "Sleima"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Division",
				'fr-fr': "Division",
				'de-de': "Division"
			},
			effect: {
				'en-us': "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Tadmorv dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Poison Gas",
				'fr-fr': "Gaz toxik",
				'de-de': "Poison Gas"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It was born when sludge in a dirty stream was exposed to the moon's X-rays. It appears among filth."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85912,
				cardmarket: 278496
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278496,
				tcgplayer: 85912
			}
		}
	],

}

export default card
