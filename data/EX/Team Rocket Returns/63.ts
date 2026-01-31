import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Larvitar",
		de: "Larvitar"
	},

	illustrator: "Midroi Harada",
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

	thirdParty: {
		cardmarket: 276354,
		tcgplayer: 86638
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		}
	]
}

export default card
