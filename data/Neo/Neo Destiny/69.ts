import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Hitmonchan",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Dodge",
			},
			effect: {
				en: "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Supersonic Jab",
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
