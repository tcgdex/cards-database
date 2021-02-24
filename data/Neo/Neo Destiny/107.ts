import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Charizard",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "White-Hot Flame",
			},
			effect: {
				en: "Discard 1 Energy card and 1 Energy card attached to Shining Charizard or this attack does nothing. Flip a coin. If tails, Shining Charizard does 30 damage to itself.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
