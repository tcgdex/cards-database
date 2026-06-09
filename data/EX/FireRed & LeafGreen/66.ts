import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
		de: "Krabby"
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
				fr: "Poigne de fer",
				de: "Irongrip"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste",
				de: "Nap"
			},
			effect: {
				en: "Remove 2 damage counters from Krabby (remove 1 if there is only 1).",
				fr: "Retirez à Krabby 2 marqueurs de dégât (ou 1 s'il n'y en a qu'1).",
				de: "Remove 2 damage counters from Krabby (remove 1 if there is only 1)."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276242,
		tcgplayer: 86524
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
