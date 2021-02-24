import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Darmanitan",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Galarian Darumaka",
	},



	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard",
			},
			effect: {
				en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Headbutt",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Crushing Headbutt.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
