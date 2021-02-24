import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Umbreon",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Drain",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
