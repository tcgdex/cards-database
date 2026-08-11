import { Card } from 'models/database/card'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		'en-us': "Torchic"
	},

	illustrator: "May Do",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Super Singe"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower"
			},
			effect: {
				'en-us': "Discard a Fire Energy card attached to Torchic."
			},
			damage: 40,

		}
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605994,
				tcgplayer: 162270
			},
		}
	]
}

export default card
