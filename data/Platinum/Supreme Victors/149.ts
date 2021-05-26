import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Hyper Flame",
				fr: "Hyper-flamme",
			},
			effect: {
				en: "Flip a coin. If heads, discard a Fire Energy attached to Moltres. If tails, discard all Energy attached to Moltres.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie Fire attachée à Sulfura. Si c'est pile, défaussez toutes les Énergies attachées à Sulfura.",
			},
			damage: 60,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
