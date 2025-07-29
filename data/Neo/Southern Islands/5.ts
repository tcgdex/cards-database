import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Ivysaur",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bulbasaur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Strange Scent",
			},
			effect: {
				en: "Each player flips a coin. Each player who gets heads chooses a total of 3 damage counters from among his or her Pokémon and removes them. (If the player's Pokémon have fewer total damage counters than that, he or she removes all of them.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275635
	}
}

export default card
