import { Card } from '../../../interfaces'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		en: "Wurmple"
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
				en: "Gooey Thread"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Claws"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 40,

		}
	],
	weaknesses: [
		{
			type: "Fire"
		},
	]
}

export default card
