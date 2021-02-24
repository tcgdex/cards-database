import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psybarrier",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Mewtwo by your opponent's Pokémon that isn't an Evolved Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Giga Burn",
			},
			effect: {
				en: "Discard all Energy attached to Mewtwo.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
