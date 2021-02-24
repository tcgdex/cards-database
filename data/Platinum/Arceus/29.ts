import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Raticate",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],

	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recruit",
			},
			effect: {
				en: "Look at your opponent's hand, choose a Supporter card you find there, and discard it. Then, use the effect of that card as the effect of this attack.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extend Fang",
			},
			effect: {
				en: "If Raticate has a Pokémon Tool card attached to it, this attack does 20 damage plus 40 more damage.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],





}

export default card
