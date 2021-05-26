import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Snorlax",
	},
	illustrator: "Craig Turvey",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Guard",
			},
			effect: {
				en: "As long as Snorlax is your Active Pokémon, the Defending Pokémon can't retreat. This power stops working when Snorlax is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roll Over",
			},
			effect: {
				en: "Snorlax is now Asleep. Flip a coin, If heads, the Defending Pokémon is now Asleep.",
			},
			damage: 30,

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




}

export default card
