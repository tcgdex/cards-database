import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'de-de': "Tragosso"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [104],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Teary Eyes",
				'fr-fr': "Des larmes dans les yeux",
				'de-de': "Teary Eyes"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à Osselait par des attaques sont réduits de 20.",
				'de-de': "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84528,
				cardmarket: 275145
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84528,
				cardmarket: 275145
			}
		},
	]
}

export default card
