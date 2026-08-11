import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Pyroar BREAK",
		'fr-fr': "Némélios TURBO",
		'es-es': "Pyroar TURBO",
		'it-it': "Pyroar TURBO",
		'pt-br': "Pyroar TURBO",
		'de-de': "Pyroleo-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Kaiser Tackle",
				'fr-fr': "Charge Impériale",
				'es-es': "Placaje Káiser",
				'it-it': "Azione Imperiale",
				'pt-br': "Colisão do Imperador",
				'de-de': "Kaiser-Tackle"
			},
			effect: {
				'en-us': "This Pokémon does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 50 dégâts.",
				'es-es': "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 50 danni a se stesso.",
				'pt-br': "Este Pokémon causa 50 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 180,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291527,
		tcgplayer: 121012
	}
}

export default card
