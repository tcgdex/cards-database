import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'de-de': "Schlurp"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [108],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stretch Tongue",
				'fr-fr': "Langue à rallonge",
				'de-de': "Stretch Tongue"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Knock Off"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Choose 1 card from your opponent's hand without looking and discard it."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When it extends its over-six-foot-long tongue, its tail quivers. There is a possibility they are connected."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86722,
				cardmarket: 278501
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278501,
				tcgplayer: 86722
			}
		}
	],

}

export default card
