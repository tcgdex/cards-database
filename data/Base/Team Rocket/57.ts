import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Grimer",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 40,
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
				en: "Poison Gas",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sticky Hands",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
