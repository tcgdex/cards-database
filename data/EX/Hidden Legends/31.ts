import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Baltoy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez 1 Énergie attachée au Pokémon Défenseur."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
