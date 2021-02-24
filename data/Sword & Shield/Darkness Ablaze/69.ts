import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mew V",
	},
	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 180,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "X Ball",
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
