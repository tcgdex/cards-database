import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
		'de-de': "Krabby"
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
				'en-us': "Irongrip",
				'fr-fr': "Poigne de fer",
				'de-de': "Irongrip"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nap"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Krabby (remove 1 if there is only 1).",
				'fr-fr': "Retirez à Krabby 2 marqueurs de dégât (ou 1 s'il n'y en a qu'1).",
				'de-de': "Remove 2 damage counters from Krabby (remove 1 if there is only 1)."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276242,
				tcgplayer: 86524
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276242,
				tcgplayer: 86524
			},
		},
	],
}

export default card
