import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ninetales",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Miracle Tail",
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roasting Heat",
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.",
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
