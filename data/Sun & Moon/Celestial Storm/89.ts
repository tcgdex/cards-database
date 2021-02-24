import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 190,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
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
				en: "Tail Crush",
				fr: "Écras’Queue",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

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
	retreat: 4,



}

export default card
