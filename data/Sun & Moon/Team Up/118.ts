import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 90,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
			},
			damage: 30,

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
