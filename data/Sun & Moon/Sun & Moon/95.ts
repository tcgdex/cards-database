import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},
	illustrator: "hatachu",
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
				"Colorless",
			],
			name: {
				en: "Dragon's Wish",
				fr: "Souhait du Dragon",
			},
			effect: {
				en: "During your next turn, you may attach any number of Energy cards from your hand to your Pokémon.",
				fr: "Pendant votre prochain tour, vous pouvez attacher autant de cartes Énergie que vous voulez de votre main à vos Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
			},

			damage: 60,

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
