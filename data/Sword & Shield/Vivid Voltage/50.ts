import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou"
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
				fr: "Coup Magnifique"
			},
			effect: {
				en: "This attack also does 120 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 120 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
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
