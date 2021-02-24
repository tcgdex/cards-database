import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's Mr. Mime",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Mime Jr.",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sleight of Hand",
			},
			effect: {
				en: "Choose up to 3 cards from your hand and put them on top of your deck. Then search your deck for that many basic Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Slap",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
