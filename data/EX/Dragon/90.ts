import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Dragonite ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dragonair",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Power",
			},
			effect: {
				en: "As often as you like during your turn, you may move an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Dragon Wave",
			},
			effect: {
				en: "Discard a Water Energy card and a Lightning Energy card attached to Dragonite ex.",
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Tail",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
