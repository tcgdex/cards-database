import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Poliwrath",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Plunge",
			},
			effect: {
				en: "Once during your turn (before you attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokémon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Punch",
			},
			effect: {
				en: "Flip a number of coins equal to the amount of W Energy cards attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads.",
			},
			damage: 40,

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
