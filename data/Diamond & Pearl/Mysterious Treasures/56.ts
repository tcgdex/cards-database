import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Nidorina",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		30,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidoran♀",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rescue",
			},
			effect: {
				en: "Search your discard pile for up to 2 Pokémon, show them to your opponent, and put them into your hand.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Scratch",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],





}

export default card
