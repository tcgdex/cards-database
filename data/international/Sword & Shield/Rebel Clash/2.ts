import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [11],

	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

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
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 80,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457388,
				tcgplayer: 213072
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457388,
				tcgplayer: 213072
			}
		},
	],
}

export default card
