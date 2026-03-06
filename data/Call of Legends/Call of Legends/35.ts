import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Punch",
				fr: "Poing magma",
				de: "Magmahieb"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy attached to Typhlosion.",
				fr: "Défaussez 2 cartes Énergie attachées à Typhlosion.",
				de: "Lege 2 an Tornupto angelegte Energien auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279678,
		tcgplayer: 90109
	}
}

export default card
