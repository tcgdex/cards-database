import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dunsparce",
	},
	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Colorless",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Dig",
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an attack from your opponent’s Pokémon, discard the top 2 cards of your opponent’s deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
