import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Dodrio",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Doduo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Retreat Aid",
			},
			effect: {
				'en-us': "As long as Dodrio is Benched, pay 1 Colorless less to retreat your Active Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Dodrio.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273960,
				tcgplayer: 42476
			}
		}
	]
}

export default card
