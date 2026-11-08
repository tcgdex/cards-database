import { Card } from 'models/database/card'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		'en-us': "Wurmple"
	},

	illustrator: "Katie Gross",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gooey Thread"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 40,

		}
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605993,
				tcgplayer: 162269
			},
		}
	]
}

export default card
