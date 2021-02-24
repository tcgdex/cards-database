import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Medicham ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Meditite",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wise Aura",
			},
			effect: {
				en: "As long as Medicham ex is your Active Pokémon, each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) can't use any Poké-Powers.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pure Power",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Kick",
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 60 damage plus 40 more damage.",
			},
			damage: 60,

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
