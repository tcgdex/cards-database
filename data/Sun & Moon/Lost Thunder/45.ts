import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Malosse",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		228,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Team Hunt",
				fr: "Chasse en Équipe",
			},
			effect: {
				en: "Draw a card for each of your Houndour in play.",
				fr: "Piochez une carte pour chacun de vos Malosse en jeu.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
