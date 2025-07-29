import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
				es: "Coletón",
				it: "Codabotta",
				pt: "Surra de Cauda",
				de: "Schweifvertrimmer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363506
	}
}

export default card
