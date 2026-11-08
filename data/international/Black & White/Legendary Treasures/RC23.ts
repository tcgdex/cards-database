import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Emolga",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
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
				'en-us': "Call for Family",
			},
			effect: {
				'en-us': "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Static Shock",
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It glides on its outstretched membrane while shocking foes with the electricity stored in the pouches on its cheeks.",
	},

	thirdParty: {
		cardmarket: 281147
	}
}

export default card
