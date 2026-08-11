import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Adaptive Evolution",
				'fr-fr': "Évolution Adaptative",
				'es-es': "Evolución Adaptable",
				'it-it': "Evoluzione Adattiva",
				'pt-br': "Evolução Adaptativa",
				'de-de': "Anpassungsfähige Entwicklung"
			},
			effect: {
				'en-us': "This Pokémon can evolve during your first turn or the turn you play it.",
				'fr-fr': "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
				'es-es': "Este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
				'it-it': "Questo Pokémon può evolversi durante il tuo primo turno o durante il turno in cui l'hai giocato.",
				'pt-br': "Este Pokémon poderá evoluir durante sua primeira vez de jogar ou na vez que você jogá-lo.",
				'de-de': "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
	},

	thirdParty: {
		cardmarket: 281484,
		tcgplayer: 91134
	}
}

export default card
