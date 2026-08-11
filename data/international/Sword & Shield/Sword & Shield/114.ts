import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Wild Tackle",
				'fr-fr': "Tacle Brutal",
				'es-es': "Placaje Salvaje",
				'it-it': "Azionferoce",
				'pt-br': "Investida Feroz",
				'de-de': "Wilder Tackle"
			},
			effect: {
				'en-us': "This Pokémon also does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
				'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It stands in grasslands, watching the sun's descent from zenith to horizon. This Pokémon has a talent for delivering dynamic kicks."
	},

	dexId: [874],

	thirdParty: {
		cardmarket: 427191,
		tcgplayer: 208423
	}
}

export default card
