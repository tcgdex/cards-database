import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'es-es': "Palkia",
		'it-it': "Palkia",
		'pt-br': "Palkia",
		'de-de': "Palkia"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale Épuisante",
				'es-es': "Drenaje Espiral",
				'it-it': "Assorbimento Spirale",
				'pt-br': "Dreno Espiral",
				'de-de': "Spiralsauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Blade",
				'fr-fr': "Hydrolame",
				'es-es': "Hoja Agua",
				'it-it': "Idrolama",
				'pt-br': "Lâmina de Água",
				'de-de': "Aquaklinge"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology.",
	},

	thirdParty: {
		cardmarket: 302162,
		tcgplayer: 146678
	}
}

export default card
