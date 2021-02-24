import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Claws",
				fr: "Griffes Enflammées",
			},

			damage: 70,

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
