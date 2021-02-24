import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Kingler δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		99,
	],
	hp: 80,
	types: [
		"Fire",
		"Metal",
	],
	evolveFrom: {
		en: "Krabby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Body Slam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
				en: "Prop-up Pinchers",
			},
			effect: {
				en: "If Kingler has a Pokémon Tool card attached to it, this attack does 40 damage plus 40 more damage.",
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
