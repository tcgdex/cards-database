import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Walrein",
	},
	illustrator: "Ken Ikuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 120,
	types: [
		"Water",
		"Darkness",
	],

	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Power Blow",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Team Aqua's Walrein.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Reverse",
			},
			effect: {
				en: "You may return any number of basic Water Energy cards attached to all of your Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
