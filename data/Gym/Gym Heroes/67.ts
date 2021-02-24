import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Mankey",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		56,
	],
	hp: 40,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Taunt",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Light Kick",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
