import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Quagsire δ",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wooper",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dig up",
			},
			effect: {
				en: "Once during your turn, when you play Quagsire from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and put them into your hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pump Out",
			},
			effect: {
				en: "If Quagsire has a Pokémon Tool card attached to it, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
