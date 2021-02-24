import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Galarian Stunfisk",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Metal",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grip and Squeeze",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
