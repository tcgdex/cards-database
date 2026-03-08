import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
		de: "Lavados"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Hyper Flame",
				fr: "Hyper-flamme",
				de: "Hyperflamme"
			},
			effect: {
				en: "Flip a coin. If heads, discard a Fire Energy attached to Moltres. If tails, discard all Energy attached to Moltres.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie Fire attachée à Sulfura. Si c'est pile, défaussez toutes les Énergies attachées à Sulfura.",
				de: "Wirf 1 Münze. Bei \"Kopf\" entferne 1 -Energie, die an Lavados angelegt ist, und lege sie auf deinen Ablagestapel. Bei \"Zahl\" entferne alle Energien, die an Lavados angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278727
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
