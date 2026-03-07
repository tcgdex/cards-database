import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Remoraid",
		de: "Remoraid"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 50,

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
				en: "Energy Draw",
				de: "Energy Draw"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Remoraid. Shuffle your deck afterward.",
				de: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Remoraid. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Razor Fin",
				de: "Razor Fin"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276365,
		tcgplayer: 88695
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

