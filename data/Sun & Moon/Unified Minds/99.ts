import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Smack",
				fr: "Claque",
			},

			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
				fr: "Griffe Taillante",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
