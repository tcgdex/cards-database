import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Rhydon",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rhyhorn",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Diffusion",
			},
			effect: {
				en: "As long as Rhydon is your Active Pokémon, prevent all damage done by attacks to all of your Benched Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Horn Drill",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Tail",
			},
			effect: {
				en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

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
