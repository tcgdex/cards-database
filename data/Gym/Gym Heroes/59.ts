import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's Jynx",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Smoochum",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Good Night",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Good Morning",
			},
			effect: {
				en: "If the Defending Pokémon was Asleep, it is no longer Asleep.",
			},
			damage: 20,

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
