import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Haunter",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dream Eater",
			},
			effect: {
				en: "If the Defending Pokémon isn't Asleep, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
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
