import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Escavalier",
		fr: "Lançargot"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 70 more damage. If all of them are heads, this attack does 140 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 70 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 140 dégâts supplémentaires."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Seashell Attack",
				fr: "Carap’Attaque"
			},

			damage: 60,

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

	retreat: 2,
	regulationMark: "D"
}

export default card
