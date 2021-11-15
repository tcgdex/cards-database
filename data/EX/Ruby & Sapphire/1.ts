import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Aggron.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts pour chaque marqueur de dégât sur Galeking."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing"
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Lariat",
				fr: "Double lasso"
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de face."
			},
			damage: "70×",

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
