import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Electrike",
		'fr-fr': "Dynavolt de Team Aqua",
		'de-de': "Team Aquas Frizelbliz"
	},

	illustrator: "M. Akiyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [309],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Self Charge",
				'fr-fr': "Auto-chargement",
				'de-de': "Self Charge"
			},
			effect: {
				'en-us': "Attach an Energy card from your hand to Team Aqua's Electrike.",
				'fr-fr': "Attachez une carte Énergie de votre main à Dynavolt de Team Aqua.",
				'de-de': "Attach an Energy card from your hand to Team Aqua's Electrike."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275830,
				tcgplayer: 89787
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275830,
				tcgplayer: 89787
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		}
	],

}

export default card
