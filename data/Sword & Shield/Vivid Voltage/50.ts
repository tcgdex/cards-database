import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Raikou",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Lightning",
	],




	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Metal",
			],
			name: {
				en: "Amazing Shot",
			},
			effect: {
				en: "This attack also does 120 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
