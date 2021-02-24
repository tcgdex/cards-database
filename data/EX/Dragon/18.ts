import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Ninjask",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		291,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Loose Shell",
			},
			effect: {
				en: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. Shuffle your deck afterward.",
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
				en: "Quick Touch",
			},
			effect: {
				en: "You may switch Ninjask with 1 of your Benched Pokémon. If you do, you may move any number of Grass Energy cards attached to Ninjask to the new Active Pokémon.",
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





}

export default card
