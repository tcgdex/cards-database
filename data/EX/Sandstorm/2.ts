import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Cacturne",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cacnea",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Payback",
			},
			effect: {
				en: "If Cacturne is your Active Pokémon and is damaged by an opponent's attack (even if Cacturne is Knocked Out), the Attacking Pokémon is now Poisoned.",
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
				en: "Feint Attack",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poke-Powers, Poke-Bodies or any other effects on that Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
