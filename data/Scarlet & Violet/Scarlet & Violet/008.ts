import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [664],
	set: Set,

	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		es: "Scatterbug",
		it: "Scatterbug",
		pt: "Scatterbug",
		de: "Purmel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
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
			it: "Questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			pt: "Este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			de: "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card