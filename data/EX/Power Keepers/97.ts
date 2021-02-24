import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Shiftry ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Skill Hack",
			},
			effect: {
				en: "Look at your opponent's hand and choose a Basic Pokémon or Evolution card you find there. Choose 1 of that Pokémon's attacks. Skill Hack copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Shiftry ex's type is still Darkness.) Shiftry ex performs that attack.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dirge",
			},
			effect: {
				en: "Does 60 damage to each of your opponent's Benched Pokémon that has the same name as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
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
