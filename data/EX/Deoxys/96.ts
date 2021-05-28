import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Crobat ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Golbat",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Distortion",
			},
			effect: {
				en: "Once during your turn (before your attack), if Crobat ex is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Crobat ex is affected by a Special Condition.",
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
				en: "Cross Attack",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pester",
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 60 damage plus 40 more damage.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
