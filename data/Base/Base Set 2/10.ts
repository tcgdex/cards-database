import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Mewtwo",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
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
				en: "Psychic",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Barrier",
			},
			effect: {
				en: "Discard 1 Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 273933,
		tcgplayer: 42445
	}
}

export default card
