import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonite-GX",
		fr: "Dracolosse-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 250,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Judgment",
				fr: "Jugement Céleste",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
			damage: 270,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mach Delivery-GX",
				fr: "Livraison Flash-GX",
			},
			effect: {
				en: "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main jusqu’à en avoir 9 ou moins. Piochez des cartes jusqu’à ce que vous ayez 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
