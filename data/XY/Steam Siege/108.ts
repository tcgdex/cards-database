import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Steelix EX",
		fr: "Steelix-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Edge",
				fr: "Tranchant Sauvage",
			},
			effect: {
				en: "You may do 50 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 50 dégâts supplémentaires. Dans ce cas, ce Pokémon s’inflige 20 dégâts.",
			},
			damage: "80+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de Fer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 100 damage times the number of heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "100×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
