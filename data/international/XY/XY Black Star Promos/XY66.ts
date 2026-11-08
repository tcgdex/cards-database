import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Rayquaza EX",
		'fr-fr': "Rayquaza EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Ascension",
				'fr-fr': "Megascension",
			},
			effect: {
				'en-us': "Search your deck for M Rayquaza-EX, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez M-Rayquaza-EX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aeroscream",
				'fr-fr': "Cri Aérien"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à ce Pokémon."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 553219
	}
}

export default card
