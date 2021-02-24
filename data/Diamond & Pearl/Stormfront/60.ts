import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Duskull",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Skélénox",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
