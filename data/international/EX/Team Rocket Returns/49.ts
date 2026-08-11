import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'de-de': "Hubelupf"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Hoppip",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Buffer",
				'de-de': "Buffer"
			},
			effect: {
				'en-us': "If Skiploom would be Knocked Out by an opponent's attack, flip a coin. If heads, Skiploom is not Knocked Out and its remaining HP becomes 10 instead.",
				'de-de': "If Skiploom would be Knocked Out by an opponent's attack, flip a coin. If heads, Skiploom is not Knocked Out and its remaining HP becomes 10 instead."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Miracle Powder",
				'de-de': "Miracle Powder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				'de-de': "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition."
			},
			damage: 10,

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
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276341,
				tcgplayer: 89255
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276341,
				tcgplayer: 89255
			},
		},
	],

}

export default card

