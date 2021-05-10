import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Ninjask",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cast-Off Shell",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a Shedinja and put it onto your Bench. Then, shuffle your deck.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Absorb",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D"
}

export default card
