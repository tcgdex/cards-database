import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'de-de': "Traumato"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Insomnia",
				'de-de': "Insomnia"
			},
			effect: {
				'en-us': "Drowzee can't be Asleep.",
				'de-de': "Drowzee can't be Asleep."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Soothing Wave",
				'de-de': "Soothing Wave"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Asleep.",
				'de-de': "Flip a coin. If heads, each Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276346,
				tcgplayer: 84974
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276346,
				tcgplayer: 84974
			},
		},
	],

}

export default card

