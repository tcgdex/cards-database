import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Hélédelle"
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle"
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique"
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc."
			},
			damage: 40,

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
			value: "-30"
		},
	],




}

export default card
