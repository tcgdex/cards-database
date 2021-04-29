import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Crobat BREAK",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
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






}

export default card
