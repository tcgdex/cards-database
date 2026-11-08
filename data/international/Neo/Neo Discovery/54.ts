import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'de-de': "Dummisel"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glare",
				'fr-fr': "Intimidation",
				'de-de': "Giftblick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Paralysé.",
				'de-de': "Wird eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		'en-us': "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail.",
		'fr-fr': "Quand il se fait remarquer, ce Pokémon fuit à reculons en plantant furieusement sa queue dans le sol."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274565,
				tcgplayer: 85007
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274565,
				tcgplayer: 85007
			}
		}
	]
}

export default card

