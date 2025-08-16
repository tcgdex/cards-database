import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
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
				en: "Adaptive Evolution",
				fr: "Évolution Adaptative",
				es: "Evolución Adaptable",
				it: "Evoluzione Adattiva",
				pt: "Evolução Adaptativa",
				de: "Anpassungsfähige Entwicklung"
			},
			effect: {
				en: "This Pokémon can evolve during your first turn or the turn you play it.",
				fr: "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
				es: "Este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
				it: "Questo Pokémon può evolversi durante il tuo primo turno o durante il turno in cui l'hai giocato.",
				pt: "Este Pokémon poderá evoluir durante sua primeira vez de jogar ou na vez que você jogá-lo.",
				de: "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
				es: "Picadura",
				it: "Coleomorso",
				pt: "Picada",
				de: "Käferbiss"
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

	thirdParty: {
		cardmarket: 281484,
		tcgplayer: 91134
	}
}

export default card
