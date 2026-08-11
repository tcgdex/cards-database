import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'de-de': "Schneckmag"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Souffle-feu",
				'de-de': "Flackern"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Magma Ring",
				'fr-fr': "Anneau magma",
				'de-de': "Magmaring"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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
	retreat: 2,


	description: {
		'en-us': "It never sleeps. It has to keep moving because if it stopped, its magma body would cool and harden.",
		'fr-fr': "Il ne dort jamais. Il doit bouger sans cesse sinon son corps de magma refroidirait et durcirait."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274639,
				tcgplayer: 89336
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274639,
				tcgplayer: 89336
			}
		}
	]
}

export default card

