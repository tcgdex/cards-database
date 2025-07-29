import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Mewtwo",
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Edge",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyslash",
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
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

	retreat: 2,

	thirdParty: {
		cardmarket: 281204
	}
}

export default card
