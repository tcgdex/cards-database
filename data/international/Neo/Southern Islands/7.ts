import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Ledyba",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		165,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Agility",
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Ledyba.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When it senses enemies approaching, this Pokémon releases an orange fluid from the joints in its legs and flees.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275637,
				tcgplayer: 46481
			}
		}
	]
}

export default card
