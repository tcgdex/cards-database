import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Beedrill δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 90,
	types: [
		"Grass",
		"Metal",
	],
	evolveFrom: {
		en: "Kakuna",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Final Sting",
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Super Slash",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
			},
			damage: 50,

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
