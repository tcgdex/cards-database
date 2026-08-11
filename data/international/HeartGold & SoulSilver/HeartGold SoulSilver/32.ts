import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Typhlosion",
		'fr-fr': "Typhlosion",
		'de-de': "Tornupto"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [157],

	hp: 130,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Quilava",
		'fr-fr': "Fleurisson"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Magma Punch",
				'fr-fr': "Poing magma",
				'de-de': "Magmahieb"
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
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Typhlosion.",
				'fr-fr': "Défaussez-vous de 2 cartes Énergie attachées à Typhlosion.",
				'de-de': "Lege 2 an Tornupto angelegte Energien auf deinen Ablagestapel."
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
		'en-us': "It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90106,
				cardmarket: 279004
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90106,
				cardmarket: 279004
			}
		},
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 153262,
				cardmarket: 279004
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 125038,
				cardmarket: 279004
			}
		},
	],

}

export default card
