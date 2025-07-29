import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		de: "Ho-Oh"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scorching Wing",
				fr: "Aile brûlante",
				de: "Versengende Schwingen"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Fire Energy attached to Ho-Oh.",
				fr: "Lancez une pièce. Si c’est pile, défaussez toutes les Énergies Fire attachées à Ho-Oh.",
				de: "Wirf eine Münze. Bei \"Zahl\" lege alle an Ho-Oh angelegten -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 279642
	}
}

export default card
