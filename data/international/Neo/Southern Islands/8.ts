import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 50,

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
				'en-us': "Tempting Eyes",
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sing",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			},

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
	retreat: 1,


	description: {
		'en-us': "After lulling its enemies with its large eyes, this Pokémon sings them to sleep with a relaxing melody.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275638,
				tcgplayer: 46482
			}
		}
	]
}

export default card
