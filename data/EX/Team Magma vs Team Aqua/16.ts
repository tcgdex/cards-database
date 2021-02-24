import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sealeo",
	},
	illustrator: "T. Honda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Trance",
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Super Hypnoblast",
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 30 damage plus 20 more damage.",
			},
			damage: 30,

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
