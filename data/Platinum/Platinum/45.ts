import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		256,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-feu",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied voltige",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
