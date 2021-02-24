import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Rapidash",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		78,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ponyta",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Stomp",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
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
