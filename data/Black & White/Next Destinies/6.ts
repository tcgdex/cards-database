import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Pansage",
		fr: "Feuillajou",
		es: "Pansage",
		it: "Pansage",
		pt: "Pansage",
		de: "Vegimak"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		511,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280231
	}
}

export default card
