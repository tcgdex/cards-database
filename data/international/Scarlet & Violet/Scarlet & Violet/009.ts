import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [665],
	set: Set,

	name: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille"
	},

	stage: "Stage1",

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
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "Spewpa doesn't live in a fixed location. It roams where it pleases across the fields and mountains, building up the energy it needs to evolve.",
	},

	thirdParty: {
        cardmarket: 702306,
        tcgplayer: 487840
    }
}

export default card