import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mawile",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mining",
			},
			effect: {
				en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. If that card is a Pokémon Tool card, you may attach it to 1 of your Pokémon instead. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Bite Off",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 30 more damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
