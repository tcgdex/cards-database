import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Ninetales EX",
		fr: "Feunard-EX",
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
				en: "Flare Bonus",
				fr: "Fulmi-Bonus",
			},
			effect: {
				en: "Discard a Fire Energy card from your hand. If you do, draw 3 cards.",
				fr: "Défaussez une carte Énergie Fire de votre main. Dans ce cas, piochez 3 cartes.",
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
				en: "Fire Blast",
				fr: "Déflagration",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
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
