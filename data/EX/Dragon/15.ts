import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flygon",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Guard",
			},
			effect: {
				en: "Whenever Flygon would be damaged by your opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 20.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Air Slash",
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy card attached to Flygon.",
			},
			damage: 60,

		},
	],






}

export default card
