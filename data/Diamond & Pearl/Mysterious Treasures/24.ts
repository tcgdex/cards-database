import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Exeggutor",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "String Bomb",
			},
			effect: {
				en: "Flip a coin for each basic Energy card attached to Exeggutor and to the Defending Pokémon. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Nutritional Support",
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],





}

export default card
