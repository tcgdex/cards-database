import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Beedrill",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Venom Spray",
			},
			effect: {
				en: "When you play Beedrill from your hand to evolve your Active Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
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
				en: "Needle Rush",
			},
			effect: {
				en: "Flip 4 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 20 more damage. If you get 3 heads, this attack does 10 damage plus 50 more damage. If you get 4 heads, this attack does 10 damage plus 90 more damage.",
			},
			damage: 10,

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
