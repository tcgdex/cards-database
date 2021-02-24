import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		512,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Supply",
				fr: "Provision de Feuillage",
			},
			effect: {
				en: "You may attach a Grass Energy card from your hand to 1 of your Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
