import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [219],

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme Éclatante",
				'es-es': "Llama Viva",
				'it-it': "Splendifiamma",
				'pt-br': "Chama Reluzente",
				'de-de': "Helle Flamme"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie da questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Its body is as hot as lava and is always billowing. Flames will occasionally burst from its shell."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511560,
				tcgplayer: 226399
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511560,
				tcgplayer: 226399
			}
		},
	],
}

export default card
