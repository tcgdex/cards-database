import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [664],
	set: Set,

	name: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug",
		'de-de': "Purmel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
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
			'it-it': "Questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			'pt-br': "Este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			'de-de': "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "sowsow",

	description: {
		'en-us': "This Pokémon scatters poisonous powder to repel enemies. It will eat different plants depending on where it lives.",
	},

	thirdParty: {
        cardmarket: 702305,
        tcgplayer: 487839
    }
}

export default card