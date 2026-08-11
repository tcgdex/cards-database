import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

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
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
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
	hp: 50,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "For protection, it releases a horrible stench from the antenna on its head to drive away enemies."
	},

	dexId: [10],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457383,
				tcgplayer: 213071
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457383,
				tcgplayer: 213071
			}
		},
	],
}

export default card
