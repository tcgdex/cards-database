import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Donphan",
	},
	illustrator: "Hasegawa Saki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
	},



	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Earthquake",
			},
			effect: {
				en: "This attack also does 20 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 120,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
