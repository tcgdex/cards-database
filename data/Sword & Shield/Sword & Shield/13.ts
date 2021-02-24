import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Thwackey",
		fr: "Badabouin",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grookey",
		fr: "Ouistempo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
