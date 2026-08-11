import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Shaymin-EX",
	},
	illustrator: "Kanako Eo",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 110,
	types: [
		"Grass",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Synthesis",
			},
			effect: {
				'en-us': "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Revenge Blast",
			},
			effect: {
				'en-us': "Does 30 more damage for each Prize card your opponent has taken.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	thirdParty: {
		cardmarket: 281131
	}


}

export default card
