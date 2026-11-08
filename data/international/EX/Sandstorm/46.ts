import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [271],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot"
	},

	stage: "Stage1",

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
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Fury Swipes"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damages times the number of heads.",
				'fr-fr': "Lancez trois pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				'de-de': "Flip 3 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275823,
				tcgplayer: 86815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275823,
				tcgplayer: 86815
			}
		},
	],

}

export default card
