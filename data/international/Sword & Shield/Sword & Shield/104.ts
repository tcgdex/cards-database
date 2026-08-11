import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Regirock V",
		'fr-fr': "Regirock V",
		'es-es': "Regirock V",
		'it-it': "Regirock V",
		'pt-br': "Regirock V",
		'de-de': "Regirock V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Raging Hammer",
				'fr-fr': "Marteau Rageur",
				'es-es': "Martillo Furioso",
				'it-it': "Martelfuria",
				'pt-br': "Martelo Feroz",
				'de-de': "Wuthammer"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rocky Tackle",
				'fr-fr': "Tacle Rocailleux",
				'es-es': "Placaje Rocoso",
				'it-it': "Azione Rocciosa",
				'pt-br': "Investida Pedregosa",
				'de-de': "Steiniger Tackle"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [377],

	thirdParty: {
		cardmarket: 427201,
		tcgplayer: 206053
	}
}

export default card
