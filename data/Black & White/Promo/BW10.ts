import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		610,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez un côté pile, cette attaque ne fait rien.",
			},
			damage: 50,

		},
	],


	retreat: 1,



}

export default card
