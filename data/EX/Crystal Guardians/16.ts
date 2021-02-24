import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Combusken",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		256,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Torchic",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Focus Energy",
			},
			effect: {
				en: "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
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
