import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Sentret",
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		161,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grope",
			},
			effect: {
				en: "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		en: "It has a very nervous nature. It stands up high on its tail so it can scan wide areas."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278048
	}
}

export default card
