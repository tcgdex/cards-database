import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Toxtricity V",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Poison Jab",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Riot",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 90 more damage.",
			},
			damage: "90+",

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
