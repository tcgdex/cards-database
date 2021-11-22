import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		98,
	],
	hp: 50,
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
				en: "Irongrip",
				fr: "Poigne de fer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste"
			},
			effect: {
				en: "Remove 2 damage counters from Krabby (remove 1 if there is only 1).",
				fr: "Retirez à Krabby 2 marqueurs de dégât (ou 1 s'il n'y en a qu'1)."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
