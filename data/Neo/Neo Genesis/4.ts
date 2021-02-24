import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Feraligatr",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Berserk",
			},
			effect: {
				en: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Chomp",
			},
			effect: {
				en: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.",
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
