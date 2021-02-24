import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Dewgong",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Freeze Lock",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to his or her Active Pokémon during his or her next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Ice",
			},
			effect: {
				en: "This attack does 40 damage plus 10 more damage for each Energy in the Defending Pokémon's Retreat Cost. Damage is calculated using the Defending Pokémon's Retreat Cost after applying effects to the Retreat Cost.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
