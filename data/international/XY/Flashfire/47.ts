import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'es-es': "Golem",
		'it-it': "Golem",
		'pt-br': "Golem",
		'de-de': "Geowaz"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'es-es': "Graveler",
		'it-it': "Graveler",
		'pt-br': "Graveler",
		'de-de': "Georok"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stone Edge",
				'fr-fr': "Lame de Roc",
				'es-es': "Roca Afilada",
				'it-it': "Pietrataglio",
				'pt-br': "Gume de Pedra",
				'de-de': "Steinkante"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Explosion",
				'fr-fr': "Explosion",
				'es-es': "Explosión",
				'it-it': "Esplosione",
				'pt-br': "Explosão",
				'de-de': "Explosion"
			},
			effect: {
				'en-us': "This Pokémon does 100 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 100 dégâts.",
				'es-es': "Este Pokémon se hace 100 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 100 danni a se stesso.",
				'pt-br': "Este Pokémon causa 100 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It tumbles down mountains, leaving grooves from peak to base. Stay clear of these grooves.",
	},

	thirdParty: {
		cardmarket: 281530,
		tcgplayer: 91180
	}
}

export default card
