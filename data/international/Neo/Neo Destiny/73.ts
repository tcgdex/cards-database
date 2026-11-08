import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'de-de': "Machollo"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chop",
				'fr-fr': "Coup tranchant",
				'de-de': "Chop"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'poing",
				'de-de': "Punch"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When bored, this super-strong Pokémon trains by lifting rocks.",
		'fr-fr': "Quand il s'ennuie, ce Pokémon super fort s'entraîne en soulevant des rochers."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274725,
				tcgplayer: 86988
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274725,
				tcgplayer: 86988
			}
		}
	]
}

export default card
