import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Elektek",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger",
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock Bolt",
				fr: "Choc'éclair",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Lightning Energy attached to Electabuzz.",
				fr: "Lancez une pièce. Si c'est pile, défaussez toutes les cartes Énergie Lightning attachées à Elektek.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
