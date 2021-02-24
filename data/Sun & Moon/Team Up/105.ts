import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		625,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Single Lunge",
				fr: "Allongement Simple",
			},
			effect: {
				en: "If this Pokémon has no damage counters on it, this attack does 90 more damage.",
				fr: "Si ce Pokémon n’a pas de marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Edge",
				fr: "Lame Puissante",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
