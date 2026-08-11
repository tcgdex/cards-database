import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'de-de': "Flurmel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [293],

	hp: 50,

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
				'en-us': "Wail",
				'fr-fr': "Gémissement",
				'de-de': "Wail"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon."
			},
			damage: 10,

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
				tcgplayer: 90580,
				cardmarket: 276156
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90580,
				cardmarket: 276156
			}
		},
	]
}

export default card
