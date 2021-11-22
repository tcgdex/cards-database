import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Endure",
				fr: "Ténacité"
			},
			effect: {
				en: "Flip a coin. If heads, then if, during your opponent's next turn, Phanpy would be Knocked Out by an attack, Phanpy isn't Knocked Out and its remaining HP become 10 instead.",
				fr: "Lancez une pièce. Si c'est face, alors, si pendant le prochain tour de votre adversaire, une attaque est supposée mettre Phanpy K.O., Phanpy n'est pas mis K.O. mais ses PV deviennent 10."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il balance sa longue trompe pour s'amuser, mais il est si fort que cela peut être dangereux."
	}
}

export default card
