import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Wailord ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 200,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Deep Dive",
			},
			effect: {
				en: "If you don't have any Benched Pokémon, this attack does nothing. Remove 3 damage counters from Wailord ex. Switch Wailord ex with 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dwindling Wave",
			},
			effect: {
				en: "Does 100 damage minus 10 damage for each damage counter on Wailord ex.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
