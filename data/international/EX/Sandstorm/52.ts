import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'de-de': "Muntier"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [288],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Focus Energy"
			},
			effect: {
				'en-us': "During your next turn, base damage of Vigoroth's Slash is attack is 90 instead of 40.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche de Vigoroth sont de 90 et non de 40.",
				'de-de': "Durig your next turn, base damage of Vigoroth's Slash is attack is 90 instead of 40."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275829,
				tcgplayer: 90367
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275829,
				tcgplayer: 90367
			}
		},
	],

}

export default card
