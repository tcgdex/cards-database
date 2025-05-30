import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		de: "Purmel",
		it: "Scatterbug",
		es: "Scatterbug",
		pt: "Scatterbug"
	},

	illustrator: "sowsow",
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
			de: "Anpassungsfähige Entwicklung",
			it: "Evoluzione Adattiva",
			es: "Evolución Adaptable",
			pt: "Evolução Adaptativa"
		},

		effect: {
			en: "This Pokémon can evolve during your first turn or the turn you play it.",
			fr: "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			de: "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			it: "Questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			es: "Este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			pt: "Este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card