import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		529,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rototiller",
				fr: "Fertilisation",
			},
			effect: {
				en: "Shuffle a card from your discard pile into your deck.",
				fr: "Mélangez une carte de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud’Boue",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
