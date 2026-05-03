import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dratini",
		de: "Dratini"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				de: "Pound"
			},

			damage: 10,

		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276344,
		tcgplayer: 84933
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

