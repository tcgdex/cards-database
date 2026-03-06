import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Corphish",
		fr: "Ecrapince",
		de: "Krebscorps"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 40,

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
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Corphish.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Ecrapince.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Krebscorps zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-masse",
				de: "Krabbhammer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277032,
		tcgplayer: 84434
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
