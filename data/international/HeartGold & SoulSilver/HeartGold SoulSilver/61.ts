import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'de-de': "Feurigel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [155],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'de-de': "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flackern"
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

	retreat: 1,

	description: {
		'en-us': "It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84552,
				cardmarket: 279033
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84552,
				cardmarket: 279033
			}
		},
		{
			type: "normal",
			stamp: ["christopher-kan"],
			thirdParty: {
				tcgplayer: 480370,
				cardmarket: 279033
			}
		},
	],

}

export default card
