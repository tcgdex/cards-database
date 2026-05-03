import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Piloswine",
		de: "Keifel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
				de: "Sheer Cold"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
				de: "Flip a coin. If heads, each Defending Pokémon can't attack during you opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tonnage",
				de: "Tonnage"
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage. If you do, Piloswine does 30 damage to itself.",
				de: "You may do 60 damage plus 40 more damage. If you do, Piloswine does 30 damage to itself."
			},
			damage: "60+",

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
		cardmarket: 276305,
		tcgplayer: 88117
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
