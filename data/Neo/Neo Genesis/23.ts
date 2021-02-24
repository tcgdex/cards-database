import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Magby",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		240,
	],
	hp: 30,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sputter",
			},
			effect: {
				en: "All Pokémon Powers stop working until the end of your next turn.",
			},
			damage: 10,

		},
	],






}

export default card
