import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
	},
	illustrator: "kawayoo",
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
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Spiral Kick",
				fr: "Coup'd Pied en Spirale",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
