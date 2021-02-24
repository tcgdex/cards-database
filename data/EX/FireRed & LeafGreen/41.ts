import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidorino",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		33,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nindoran ♂",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Stab",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 30 more damage.",
			},
			damage: 30,

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
