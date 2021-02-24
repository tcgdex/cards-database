import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swalot",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		317,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gulpin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pick and Choose",
			},
			effect: {
				en: "Choose either Burned or Poisoned, and either Asleep or Confused. The Defending Pokémon is now affected by both Special Conditions.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Special Condition affecting the Defending Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
