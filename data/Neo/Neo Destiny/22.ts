import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dragonair",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dratini",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Light",
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Protective Wave",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair.",
			},

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
