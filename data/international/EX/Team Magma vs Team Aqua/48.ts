import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Carvanha",
		'fr-fr': "Carvanha de Team Aqua",
		'de-de': "Team Aquas Kanivanha"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [318],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wave Splash"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Fin",
				'fr-fr': "Aileron-rasoir",
				'de-de': "Razor Fin"
			},

			damage: 20,

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
				cardmarket: 275825,
				tcgplayer: 89778
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275825,
				tcgplayer: 89778
			}
		},
	],

}

export default card
