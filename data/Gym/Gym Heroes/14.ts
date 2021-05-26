import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's Gengar",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pain Amplifier",
			},
			effect: {
				en: "Put a damage counter on each of your opponent's Pokémon that already has any damage counters on it.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Call of the Night",
			},
			effect: {
				en: "Unless this attack Knocks Out the Defending Pokémon, flip 2 coins. If both of them are heads, your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck.",
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
