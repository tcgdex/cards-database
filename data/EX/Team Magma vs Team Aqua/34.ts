import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Houndoom",
	},
	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Target Scorch",
			},
			effect: {
				en: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Burned.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Burn",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
