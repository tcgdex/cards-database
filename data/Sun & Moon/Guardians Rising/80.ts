import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Limitation",
				fr: "Restriction",
			},
			effect: {
				en: "Your opponent can't play any Supporter cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 20,

		},
	],


	retreat: 1,



}

export default card
