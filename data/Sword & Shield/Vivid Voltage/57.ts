import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Tynamo",
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 40,
	types: [
		"Lightning",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitate",
			},
			effect: {
				en: "If this Pokémon has any Energy attached, it has no Retreat Cost.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tiny Charge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
