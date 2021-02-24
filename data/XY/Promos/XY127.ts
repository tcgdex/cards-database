import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Moltres",
	},
	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Combustion",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flying Flare",
			},
			effect: {
				en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
