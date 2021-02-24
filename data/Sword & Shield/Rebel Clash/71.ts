import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Toxtricity VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 320,

	evolveFrom: {
		en: "Toxtricity V",
	},



	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "G-Max Riot",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 80 more damage.",
			},
			damage: "160+",

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
