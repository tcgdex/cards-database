import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Rocket's Snorlax",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Munchlax",
	},
	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Restless Sleep",
			},
			effect: {
				en: "If your opponent's attack does damage to Rocket's Snorlax and Rocket's Snorlax is already Asleep (even if it's Knocked Out), this power does 20 damage to the attacking Pokémon.",
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
				en: "Collapse",
			},
			effect: {
				en: "Rocket's Snorlax is now Asleep (after doing damage).",
			},
			damage: 20,

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
