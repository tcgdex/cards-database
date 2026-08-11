import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Ninetales EX",
		'fr-fr': "Feunard-EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 170,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare Bonus",
				'fr-fr': "Fulmi-Bonus",
			},
			effect: {
				'en-us': "Discard a Fire Energy card from your hand. If you do, draw 3 cards.",
				'fr-fr': "Défaussez une carte Énergie Fire de votre main. Dans ce cas, piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288453,
		tcgplayer: 113671
	}
}

export default card
