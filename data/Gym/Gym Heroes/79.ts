import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Tangela",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Slap",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Stretch Vine",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274215
	}
}

export default card
