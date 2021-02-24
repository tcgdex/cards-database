import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Sceptile ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 150,
	types: [
		"Grass",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Green Heal",
			},
			effect: {
				en: "Remove 4 damage counters from each of your Pokémon that has Grass Energy attached. If that Pokémon has less than 4 damage counters, remove all of them.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat until the end of your opponent's next turn.",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
			},
			effect: {
				en: "Sceptile ex can't use Slashing Strike during your next turn.",
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
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
