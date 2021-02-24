import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Houndoom",
	},
	illustrator: "Ken Ikuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 70,
	types: [
		"Fire",
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Roasting Heat",
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage.",
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
				en: "Magma Spurt",
			},
			effect: {
				en: "Discard the top 5 cards from your deck. This attack does 30 damage times the number of Fire and Fighting basic Energy cards discarded in this way.",
			},
			damage: 30,

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
