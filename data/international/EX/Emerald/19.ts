import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoferos",
		'de-de': "Rizeros"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'korne",
				'de-de': "Horn Attack"
			},

			damage: 30,

		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-pierre",
				'de-de': "Rock Tumble"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage isn't affected by Resistance."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 88733,
		cardmarket: 276530
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88733,
				cardmarket: 276530
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88733,
				cardmarket: 276530
			},
		}
	],
}

export default card
