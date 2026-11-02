import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		fr: "Arceus",
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 80,

	types: [
		"Fire"
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
				fr: "Flamme éclatante",
			},
			effect: {
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83594
			}
		}
	]
}

export default card
