import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
		de: "Krabby"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				de: "Klammer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-Masse",
				de: "Krabbhammer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
		de: "Wittert es Gefahr, hüllt es sich in Blasen aus seinem Maul, um größer zu erscheinen."
	},

	thirdParty: {
		cardmarket: 288461,
		tcgplayer: 113679
	}
}

export default card
