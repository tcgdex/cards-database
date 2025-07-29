import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Typhlosion",
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
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy attached to Typhlosion.",
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
		cardmarket: 279678
	}
}

export default card
