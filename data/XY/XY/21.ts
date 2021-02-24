import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Mantle",
				fr: "Manteau de Magma",
			},
			effect: {
				en: "You may discard the top card of your deck. If that card is a Fire Energy card, this attack does 50 more damage.",
				fr: "Vous pouvez défausser la carte du dessus de votre deck. Si cette carte est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
