import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gulpin",
		de: "Schluppuck"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		316,
	],

	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				de: "Sammeln"
			},
			effect: {
				en: "Draw a card.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Drool",
				de: "Sabbern"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
