import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Swalot",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		317,
	],

	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gulpin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Damage Roller",
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until the Defending Pokémon has the same remaining HP as Swalot. (If the Defending Pokémon has the same or less remaining HP as Swalot, this attack does nothing.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Entangle Tackle",
			},
			effect: {
				en: "You may do 50 damage plus 30 more damage. If you do, this attack does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
