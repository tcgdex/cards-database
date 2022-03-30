import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu EX",
		fr: "Pikachu EX",
	},
	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 130,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de Fer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overspark",
				fr: "Max'Étincelle",
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon. This attack does 50 damage times the number of Energy cards you discarded.",
				fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
