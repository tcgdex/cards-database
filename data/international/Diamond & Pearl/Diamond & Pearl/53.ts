import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock"
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
		'en-us': "Machop",
		'fr-fr': "Machoc",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'de-de': "Karateschlag"
			},
			effect: {
				'en-us': "Does 40 damage minus 10 damage for each damage counter on Machoke.",
				'fr-fr': "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Machopeur.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Maschock zu."
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
				'en-us': "Seismic Toss",
				'fr-fr': "Frappe Atlas",
				'de-de': "Geowurf"
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
		'en-us': "MACHOKE's boundless power is very dangerous, so it wears a belt that suppresses its energy.",
		'fr-fr': "La force herculéenne du Machopeur est très dangereuse. Il utilise une ceinture pour contenir son énergie."
	},

	thirdParty: {
		cardmarket: 277552,
		tcgplayer: 86981
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
