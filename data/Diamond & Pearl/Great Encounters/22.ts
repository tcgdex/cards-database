import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
		de: "Latias"
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
				en: "Miraculous Light",
				fr: "Lumière miraculeuse",
				de: "Wundersames Licht"
			},
			effect: {
				en: "Remove 2 damage counters and all Special Conditions from Latias.",
				fr: "Retirez à Latias 2 marqueurs de dégât ainsi que tous ses États Spéciaux.",
				de: "Entferne 2 Schadensmarken und alle Speziellen Zustände von Latias."
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
				en: "Mist Ball",
				fr: "Boule de brume",
				de: "Nebelball"
			},
			effect: {
				en: "Discard a Fire Energy and a Water Energy attached to Latias.",
				fr: "Défaussez une Énergie Fire et une Énergie Water attachées à Latias.",
				de: "Lege 1 -Energie und 1 -Energie, die an Latias angelegt sind, auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 277924
	}
}

export default card
