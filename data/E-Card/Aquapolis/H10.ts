import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggutor",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Eggsplosion",
			},
			effect: {
				en: "Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Called Shot",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage times the amount of Energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokémon)",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
