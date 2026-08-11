import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Yukiko Baba",
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
				'en-us': "Dig Deep",
				'fr-fr': "Trou profond",
				'de-de': "Dig Deep"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mud Slap",
				'fr-fr': "Coud'boue",
				'de-de': "Mud Slap"
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87881,
				cardmarket: 276711
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87881,
				cardmarket: 276711
			},
		}
	],
}

export default card
