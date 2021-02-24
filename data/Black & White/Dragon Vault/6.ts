import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Bagon",
		fr: "Draby",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],
	hp: 50,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
