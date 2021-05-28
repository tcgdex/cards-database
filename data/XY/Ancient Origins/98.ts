import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Rayquaza-EX",
		fr: "M-Rayquaza-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 220,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Emerald Break",
				fr: "Max Θ",
			},
			effect: {
				en: "This attack does 30 damage times the number of your Benched Pokémon.",
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
				fr: "Bris'Émeraude",
			},
			effect: {
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc.",
			},
			damage: "30×",

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
	retreat: 1,



}

export default card
