import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		'en-us': "Psyduck"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confusion Wave",
			},
			effect: {
				'en-us': "Both Activate Pokémon are now Confused"
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Shibuzoh.",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366770,
				tcgplayer: 180451
			}
		}
	]
}

export default card

