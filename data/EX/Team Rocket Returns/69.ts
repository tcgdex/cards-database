import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Onix",
		de: "Onix"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 80,

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
				en: "Horn Rush",
				de: "Horn Rush"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Granite Head",
				de: "Granite Head"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Onix by attacks is reduced by 10 (after applying Weakness and Resistance).",
				de: "During your opponent's next turn, any damage done to Onix by attacks is reduced by 10 (after applying Weakness an Resistance)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276361,
		tcgplayer: 87880
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
			stamp: ["hiroki-yano"]
		}
	]
}

export default card
