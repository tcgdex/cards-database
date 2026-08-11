import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
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
			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "Its cells are all magnets. It uses magnetism to communicate with others of its kind.",
	},

	thirdParty: {
		cardmarket: 297540,
		tcgplayer: 130995
	}
}

export default card
