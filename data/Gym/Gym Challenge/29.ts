import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Gengar",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Wave",
			},
			effect: {
				en: "All Pokémon Powers stop working until the end of your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Shadow Bind",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274297
	}
}

export default card
