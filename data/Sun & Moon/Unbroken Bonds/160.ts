import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Purugly",
		fr: "Chaffreux",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		432,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stray Cat Dash",
				fr: "Fuite du Chat Perdu",
			},
			effect: {
				en: "Discard a random card from your opponent's hand. If this Pokémon evolved from Glameow during this turn, discard 2 cards instead of 1.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire. Si ce Pokémon a évolué de Chaglam pendant ce tour, défaussez 2 cartes au lieu d’une.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunge Out",
				fr: "Allonger",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
