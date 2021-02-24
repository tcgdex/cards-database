import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Alcremie V",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sugary Sprinkles",
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sweet Splash",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
