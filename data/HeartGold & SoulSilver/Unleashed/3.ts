import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 60,

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
				en: "Deep Sea Swirl",
				fr: "Remous abyssal",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 5 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
