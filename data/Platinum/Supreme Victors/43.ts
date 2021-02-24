import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		119,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Horn Pierce",
				fr: "Corne perçante",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si l'une d'elles est pile, cette attaque est sans effet.",
			},
			damage: 90,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Endure",
				fr: "Ténacité",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Seaking would be Knocked Out by damage from an attack, Seaking is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lancez une pièce. Si c'est face, si Poissoroy est mis K.O. par des dégâts d'une attaque lors du prochain tour de votre adversaire, il n'est pas mis K.O. À la place, il lui reste 10 PV.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
