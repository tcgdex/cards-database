import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sealeo",
		fr: "Phogleur de Team Aqua",
		de: "Team Aquas Seejong"
	},
	illustrator: "T. Honda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde boréale",
				de: "Aurora Beam"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
				de: "Knock Over"
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				de: "You may discard any Stadium card in play."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	evolveFrom: {
		en: "Team Aqua's Spheal",
		fr: "Obalie de la Team Aqua",
	}
}

export default card
