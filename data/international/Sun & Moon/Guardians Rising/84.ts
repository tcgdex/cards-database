import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Core Beam",
				'fr-fr': "Faisceau Central",
				'es-es': "Rayo Nuclear",
				'it-it': "Raggio Nucleico",
				'pt-br': "Feixe do Núcleo",
				'de-de': "Kernstrahl"
			},
			effect: {
				'en-us': "Discard a Metal Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Metal de ce Pokémon.",
				'es-es': "Descarta 1 Energía Metal de este Pokémon.",
				'it-it': "Scarta un’Energia Metal assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia Metal deste Pokémon.",
				'de-de': "Lege 1 Metal-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When two Beldum link together, their psychic power is doubled. Their intelligence, however, remains unchanged.",
	},

	thirdParty: {
		cardmarket: 297541,
		tcgplayer: 130996
	}
}

export default card
