import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'de-de': "Latias"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Miraculous Light",
				'fr-fr': "Lumière miraculeuse",
				'de-de': "Wundersames Licht"
			},
			effect: {
				'en-us': "Remove 2 damage counters and all Special Conditions from Latias.",
				'fr-fr': "Retirez à Latias 2 marqueurs de dégât ainsi que tous ses États Spéciaux.",
				'de-de': "Entferne 2 Schadensmarken und alle Speziellen Zustände von Latias."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mist Ball",
				'fr-fr': "Boule de brume",
				'de-de': "Nebelball"
			},
			effect: {
				'en-us': "Discard a Fire Energy and a Water Energy attached to Latias.",
				'fr-fr': "Défaussez une Énergie Fire et une Énergie Water attachées à Latias.",
				'de-de': "Lege 1 -Energie und 1 -Energie, die an Latias angelegt sind, auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is covered with a down that can refract light in such a way that it becomes invisible.",
	},

	thirdParty: {
		cardmarket: 277924,
		tcgplayer: 86651
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
