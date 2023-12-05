import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},
	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
