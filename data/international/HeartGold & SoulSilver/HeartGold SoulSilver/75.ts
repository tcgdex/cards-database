import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'de-de': "Mauzi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [52],

	hp: 60,

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
				'en-us': "Pay Day",
				'fr-fr': "Jackpot",
				'de-de': "Zahltag"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dig Claws",
				'fr-fr': "Creusogriffes",
				'de-de': "Schaufelkrallen"
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

	retreat: 1,

	description: {
		'en-us': "It loves anything that shines. It especially adores coins that it picks up and secretly hoards."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87322,
				cardmarket: 279047
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87322,
				cardmarket: 279047
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"]
		},
	],

}

export default card
