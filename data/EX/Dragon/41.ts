import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shelgon",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Guard",
			},
			effect: {
				en: "As long as Shelgon has any basic Energy cards attached to it, damage done to Shelgon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
			},

			damage: 20,

		},
	],






}

export default card
