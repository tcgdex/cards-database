import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Glalie",
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],

	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wreck",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 damage plus 50 more damage. Discard that Stadium card.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Avalanche",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
