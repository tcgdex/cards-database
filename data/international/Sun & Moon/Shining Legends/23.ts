import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Floatzel",
		'fr-fr': "Mustéflott",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'pt-br': "Floatzel",
		'de-de': "Bojelin"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		419,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Razor Fin",
				'fr-fr': "Aileron-Rasoir",
				'es-es': "Aleta Afilada",
				'it-it': "Pinnalama",
				'pt-br': "Barbatana Cortante",
				'de-de': "Rasierflosse"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Bomb",
				'fr-fr': "Aqua Bombe",
				'es-es': "Bomba de Agua",
				'it-it': "Acquabomba",
				'pt-br': "Bomba Aquática",
				'de-de': "Wasserbombe"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It floats using its well-developed flotation sac. It assists in the rescues of drowning people.",
	},

	thirdParty: {
		cardmarket: 302161,
		tcgplayer: 146676
	}
}

export default card
