import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d’Alola",
		'es-es': "Geodude de Alola",
		'it-it': "Geodude di Alola",
		'pt-br': "Geodude de Alola",
		'de-de': "Alola-Kleinstein"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Self-Destruct",
				'fr-fr': "Destruction",
				'es-es': "Autodestrucción",
				'it-it': "Autodistruzione",
				'pt-br': "Autodestruição",
				'de-de': "Finale"
			},
			effect: {
				'en-us': "This Pokémon does 60 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 60 dégâts.",
				'es-es': "Este Pokémon se hace 60 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 60 danni a se stesso.",
				'pt-br': "Este Pokémon causa 60 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If you mistake it for a rock and step on it, it will headbutt you in anger. In addition to the pain, it will also zap you with a shock.",
	},

	thirdParty: {
		cardmarket: 368965,
		tcgplayer: 183807
	}
}

export default card
