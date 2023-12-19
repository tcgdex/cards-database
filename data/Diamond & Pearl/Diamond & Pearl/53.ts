import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		de: "Maschock"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag"
			},
			effect: {
				en: "Does 40 damage minus 10 damage for each damage counter on Machoke.",
				fr: "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Machopeur.",
				de: "Dieser Angriff fügt 40 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Maschock zu."
			},
			damage: "40-",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas",
				de: "Geowurf"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "La force herculéenne du Machopeur est très dangereuse. Il utilise une ceinture pour contenir son énergie."
	}
}

export default card
