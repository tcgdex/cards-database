import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Hitmonlee",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		106,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Stretch Kick",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "High Jump Kick",
			},

			damage: 50,

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
