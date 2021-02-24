import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Gible",
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		443,
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
			],
			name: {
				en: "Push Down",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],





}

export default card
