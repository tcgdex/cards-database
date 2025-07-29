import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Mew",
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 60,

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
				en: "Cut",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-Wisp",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 278850
	}
}

export default card
