import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

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
		fr: "Fleurisson",
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
				fr: "Défaussez-vous de 2 cartes Énergie attachées à Typhlosion.",
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

	retreat: 1,

	description: {
		en: "It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cracked-ice"
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	],

	thirdParty: {
		cardmarket: 279004,
		tcgplayer: 90106
	}
}

export default card
