import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Muk ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Toxic Gas",
			},
			effect: {
				en: "As long as Muk ex is your Active Pokémon, ignore all Poké-Powers and Poké-Bodies other than Toxic Gas.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Breath",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slimy Water",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
			},
			damage: 40,

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
