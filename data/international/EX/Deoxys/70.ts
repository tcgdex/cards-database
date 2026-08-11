import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyena",
		'de-de': "Fiffyen"
	},

	illustrator: "Aimi Tomita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		261,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surprise",
				'fr-fr': "Surprise",
				'de-de': "Surprise"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la. Votre adversaire doit ensuite mélanger cette carte à son deck.",
				'de-de': "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc aiguisé",
				'de-de': "Sharp Fang"
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
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88296,
				cardmarket: 276473
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88296,
				cardmarket: 276473
			},
		},
	],

}

export default card
