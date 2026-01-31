import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Pupitar",
		de: "Dunkles Pupitar"
	},

	illustrator: "Emi Miwa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		en: "Larvitar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Streak",
				de: "Dark Streak"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				de: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				de: "Rock Tumble"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				de: "This attack's damage is not affected by Resistance."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276332,
		tcgplayer: 84644
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
