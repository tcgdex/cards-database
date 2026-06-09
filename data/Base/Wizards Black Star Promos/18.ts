import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Team Rocket's Meowth",
	},
	illustrator: "Kunihiko Yuyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		52,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miraculous Comeback",
			},
			effect: {
				en: "Flip a number of coins equal to the total number of Pokémon in play. This attack does 10 damage times the number of heads. Then, Team Rocket's Meowth does 10 damage times the number of tails to itself.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "This Pokémon is more active at night. It likes bright, shiny things and cannot resist taking them and adding them to its collection.",
	},
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
