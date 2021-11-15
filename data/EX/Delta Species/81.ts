import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal"
	},
	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		280,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte."
			},

		},
		{
			name: {
				en: "Quick Blow",
				fr: "Coup d'poing éclair"
			},

			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
			},

			damage: "10+",
			cost: ["Colorless", "Colorless"]
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
