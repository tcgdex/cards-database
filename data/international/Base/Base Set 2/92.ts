import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Spearow",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		21,
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
				'en-us': "Peck",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Move",
			},
			effect: {
				'en-us': "If Spearow was attacked last turn, do the final result of that attack on Spearow to the Defending Pokémon.",
			},

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
		'en-us': "Eats bugs in grassy areas. It has to flap its short wings at high speeds to stay airborne.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274015,
				tcgplayer: 42543
			}
		}
	]
}

export default card
