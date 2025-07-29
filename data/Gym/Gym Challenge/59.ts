import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Mr. Mime",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Magic Darts",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon and flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance for this attack.",
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

	thirdParty: {
		cardmarket: 274327
	}
}

export default card
