import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Tyranitar",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mountain Smasher",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Dark Tyranitar. This attack does 20 damage times the number of heads. Then, for each heads, discard the top card from your opponent's deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Fling Away",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, this attack does 30 damage instead of 50 and choose 1 of those Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
