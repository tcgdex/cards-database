import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Whiscash",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		340,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Barboach",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Raging Tremble",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage for each damage counter on Whiscash to each Defending Pokémon. If tails, this attack does 10 damage for each damage counter on Whiscash to the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Dwindling Wave",
			},
			effect: {
				en: "Does 70 damage minus 10 damage for each damage counter on Whiscash.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
