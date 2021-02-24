import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Eelektross",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		604,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Suction Heal",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slurp Shakedown",
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 60 damage to the new Defending Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
