import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Haunter",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],

	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hidden Poison",
			},
			effect: {
				en: "If Haunter is your Active Pokémon and is damaged by an opponent's attack (even if Haunter is Knocked Out), the Attacking Pokémon is now Poisoned.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tongue Spring",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
