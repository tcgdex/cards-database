import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Cherubi",
		'de-de': "Kikugi"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [420],
	
	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam",
				'de-de': "Solarstrahl"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The small ball is not only filled with nutrients, it is also tasty. Starly try to peck it off."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84263,
				cardmarket: 278932
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278932,
				tcgplayer: 84263
			}
		},
	],

}

export default card
