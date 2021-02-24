import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Milotic",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Shower",
			},
			effect: {
				en: "Once during your turn, when you play Milotic from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon and your opponent's Pokémon (excluding Pokémon-ex).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distorted Wave",
			},
			effect: {
				en: "Before doing damage, remove 3 damage counters from the Defending Pokémon (all if there are less than 3).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
