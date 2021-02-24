import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quagsire",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earthquake",
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

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
