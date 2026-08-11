import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'de-de': "Rear Kick"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Skull Bash",
				'fr-fr': "Coud'krane",
				'de-de': "Skull Bash"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 85135,
		cardmarket: 276559
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85135,
				cardmarket: 276559
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85135,
				cardmarket: 276559
			},
		}
	],
}

export default card
