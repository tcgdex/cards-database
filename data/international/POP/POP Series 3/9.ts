import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [205],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Toxic",
				'fr-fr': "Toxik"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85549,
				cardmarket: 277457
			},
		},
	],

}

export default card
