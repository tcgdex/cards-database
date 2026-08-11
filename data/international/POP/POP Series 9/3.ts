import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],

			name: {
				'en-us': "High Volt",
				'fr-fr': "Voltage puissant"
			},

			effect: {
				'en-us': "If Raichu evolved from Pikachu during this turn, this attack's base damage is 100 instead of 60.",
				'fr-fr': "Si Raichu évolue d'un Pokémon lors de ce tour, les dégâts de base de cette attaque sont de 100 au lieu de 60."
			},

			damage: 60,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88514,
				cardmarket: 278554
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88514,
				cardmarket: 278554
			},
		},
	],

}

export default card
