import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [104],
	set: Set,

	name: {
		'en-us': "Cubone"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leer",
			},
			effect: {
				'en-us': "Flip a coin, If heas, your opponent's Active Pokémon is now Paralyzed"
			},
		},
		{
			cost: [
				"Colorless", "Colorless",
			],
			name: {
				'en-us': "Headbutt",
			},
			damage: 20,
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "sui",	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366775,
				tcgplayer: 180455
			}
		}
	]
}

export default card

