import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Bulbasaur",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leech Seed",
			},
			effect: {
				en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.",
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
		cardmarket: 274833
	}
}

export default card
