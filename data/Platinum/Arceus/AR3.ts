import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme éclatante",
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy attached to Arceus.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à Arceus.",
			},
			damage: 80,

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
