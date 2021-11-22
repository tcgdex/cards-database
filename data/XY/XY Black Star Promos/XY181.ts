import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Crobat BREAK",
		fr: "Nostenfer TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Crobat",
		fr: "Nostenfer"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Silent Bite",
			},
			effect: {
				en: "You may leave your opponent's Active Pokémon Paralyzed. If you do, shuffle this Pokémon and all cards attached to it into your deck.",
			},
			damage: 60,

		},
	],

	retreat: 0
}

export default card
