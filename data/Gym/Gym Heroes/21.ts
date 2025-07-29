import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Onix",
	},

	illustrator: "Benimaru Itoh",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bind",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Tunneling",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Brock's Onix can't attack during your next turn.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274157
	}
}

export default card
