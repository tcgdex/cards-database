import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Crobat δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 90,
	types: [
		"Grass",
		"Metal",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Radar Jam",
			},
			effect: {
				en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Target Attack",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

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
