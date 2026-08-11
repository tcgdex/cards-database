import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	illustrator: "Tomohiro Kitakaze",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		572,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon prefer a tidy habitat. They are always sweeping and dusting, using their tails as brooms.",
	},

	thirdParty: {
		cardmarket: 280309,
		tcgplayer: 87476
	}
}

export default card
