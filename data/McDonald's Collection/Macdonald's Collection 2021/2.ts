import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Chikorita",
	},
	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		152,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mini Drain",
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 1,



}

export default card
