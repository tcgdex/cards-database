import { Card } from 'models/database/card'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [267],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Beautifly.",
				'fr-fr': "Retirez à Charmillon 1 marqueur de dégât."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83756,
				cardmarket: 277420
			},
		},
	],

}

export default card
