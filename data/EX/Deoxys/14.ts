import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Shedinja",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nincada",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Empty Shell",
			},
			effect: {
				en: "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extra Curse",
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead.",
			},

		},
	],






}

export default card
