import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Ariados",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Spinarak",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spider Net",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Evolution Pokémon with their Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
