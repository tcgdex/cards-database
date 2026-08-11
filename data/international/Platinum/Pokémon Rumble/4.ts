import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Heatran"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [485],

	hp: 110,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Boiler"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Water Pokémon, this attack does 60 damage plus 40 more damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 4,


	variants: [
		{
			type:"normal"
		}
	]
}

export default card
