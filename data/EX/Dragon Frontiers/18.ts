import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ledian δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		166,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ledyba",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Prowl",
			},
			effect: {
				en: "Once during your turn, when you play Ledian from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Star",
			},
			effect: {
				en: "If Ledian has a Pokémon Tool card attached to it, draw 3 cards.",
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
