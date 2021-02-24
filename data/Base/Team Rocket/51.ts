import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Raticate",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 50,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
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
				en: "Hyper Fang",
			},
			effect: {
				en: "Flip a coin. if tails, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
