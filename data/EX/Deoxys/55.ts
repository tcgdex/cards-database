import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Beldum",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
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
				"Colorless",
			],
			name: {
				en: "Flip Over",
			},
			effect: {
				en: "Beldum does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
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
