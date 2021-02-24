import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Shieldon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		410,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Armor Fossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Hard Face",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Shieldon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shield Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
