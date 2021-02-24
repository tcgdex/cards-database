import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		514,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
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
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Recharge",
				fr: "Flambée Rechargée",
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
