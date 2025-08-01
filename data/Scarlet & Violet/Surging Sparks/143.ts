import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boosted Evolution",
			fr: "Évolution Boostée",
			es: "Evolución Potenciada",
			it: "Evoluzione Potenziata",
			pt: "Impulso da Evolução",
			de: "Evolutionsschub"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, il peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			es: "Mientras este Pokémon esté en el Puesto Activo, puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			it: "Fintanto che questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, ele poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann es sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			it: "Carica Avventata",
			pt: "Carga Indomável",
			de: "Waghalsiger Sturmangriff"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Naoyo Kimura",

	thirdParty: {
		cardmarket: 794516
	}
}

export default card
