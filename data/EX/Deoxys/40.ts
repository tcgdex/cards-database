import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Metang",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		375,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Beldum",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Boom",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Blow",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

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
