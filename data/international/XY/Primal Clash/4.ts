import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-Vie",
				'es-es': "Absorber",
				'it-it': "Assorbimento",
				'pt-br': "Absorção",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
				'es-es': "Látigo Cepa",
				'it-it': "Frustata",
				'pt-br': "Chicote de Vinha",
				'de-de': "Rankenhieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
	},

	thirdParty: {
		cardmarket: 273535,
		tcgplayer: 95888
	}
}

export default card
