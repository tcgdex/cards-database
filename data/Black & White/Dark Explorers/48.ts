import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Espeon",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solar Revelation",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Energy attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psy Report",
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
			},
			damage: 60,

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
