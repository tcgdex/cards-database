import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Exeggcute",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leech Seed",
			},
			effect: {
				en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute.",
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
		cardmarket: 274840
	}
}

export default card
