import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'de-de': "Papungha"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Buffer",
				'de-de': "Buffer"
			},
			effect: {
				'en-us': "If Jumpluff would be Knocked Out by an opponent's attack, flip a coin. If heads, Jumpluff is not Knocked Out and its remaining HP becomes 10 instead.",
				'de-de': "If Jumpluff would be Knocked Out by an opponent's attack, flip a coin. If heads, Jumpluff is not Knocked Out and its remaining HP becomes 10 instead."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Crush",
				'de-de': "Energy Crush"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
				'de-de': "Does 10 damge plus 10 more damage for each Energy attached to all of your opponent's Pokémon."
			},
			damage: "10+",

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
			type: "holo",
			thirdParty: {
				cardmarket: 276303,
				tcgplayer: 86365
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276303,
				tcgplayer: 86365
			},
		},
	],

}

export default card
