import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Larvitar",
		de: "Larvitar"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Light Punch",
				de: "Light Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dig Drain",
				de: "Dig Drain"
			},
			effect: {
				en: "Remove 1 damage counter from Larvitar.",
				de: "Remove 1 damage counter from Larvitar."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276355,
				tcgplayer: 86638
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276355,
				tcgplayer: 86638
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871535,
				tcgplayer: 477544
			},
		},
	],

}

export default card
