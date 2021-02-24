import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		443,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Never Enough",
				fr: "Insatiable",
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 2 cards.",
				fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
			},

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
