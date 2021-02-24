import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Salamence V",
	},
	illustrator: "Saki Hayashiro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Colorless",
	],




	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swoop Across",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Storm",
			},

			damage: 160,

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
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
