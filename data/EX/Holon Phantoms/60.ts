import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Barboach",
		fr: "Barloche",
		de: "Schmerbe"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		339,
	],

	hp: 50,

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
				en: "Waterfall",
				fr: "Cascade",
				de: "Kaskade"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Barboach.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Barloche.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Schmerbe zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277030,
		tcgplayer: 83728
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
