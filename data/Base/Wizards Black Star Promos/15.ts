import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Cool Porygon",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
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
				"Colorless",
			],
			name: {
				en: "Texture Magic",
			},
			effect: {
				en: "You may change Cool Porygon's Resistance to a type of your choice other than Colorless. If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless. (Benching either Pokémon ends the effect on that Pokémon.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "3-D Attack",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	variants: [
		{
			type: "normal"
		}
	]
}

export default card
