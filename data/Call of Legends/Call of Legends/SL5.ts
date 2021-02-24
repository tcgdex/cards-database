import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 100,
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
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scorching Wing",
				fr: "Aile brûlante",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Fire Energy attached to Ho-Oh.",
				fr: "Lancez une pièce. Si c’est pile, défaussez toutes les Énergies Fire attachées à Ho-Oh.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
