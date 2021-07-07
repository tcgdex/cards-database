import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heart Wink",
				fr: "Clin de Cœur",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can’t draw a card at the beginning of his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas piocher de carte au début de son prochain tour.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spike Draw",
				fr: "Pique-Pioche",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
