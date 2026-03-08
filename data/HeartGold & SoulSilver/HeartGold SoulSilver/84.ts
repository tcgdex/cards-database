import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
		de: "Sterndu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque tournante",
				de: "Rundumangriff"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "At night, the center of its body slowly flickers with the same rhythm as a human heartbeat."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp : ["snowflake"],
			languages: ["de"]
		},
	],

	thirdParty: {
		cardmarket: 279056,
		tcgplayer: 89552
	}
}

export default card
