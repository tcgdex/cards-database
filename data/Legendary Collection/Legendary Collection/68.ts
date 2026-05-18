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
	retreat: 1,


	description: {
		en: "A strange seed was planted on its back at birth. Thus, a plant sprouted and now grows with this Pokémon.",
	},

	thirdParty: {
		cardmarket: 274833,
		tcgplayer: 84025
	},

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	]
}

export default card
