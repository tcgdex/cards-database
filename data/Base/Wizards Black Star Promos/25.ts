import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Flying Pikachu",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thundershock",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Flying Pikachu; if tails, this attack does nothing (not even damage).",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
