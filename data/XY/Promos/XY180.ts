import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Arcanine BREAK",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Arcanine",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Turbo Flame",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			},
			damage: 80,

		},
	],






}

export default card
