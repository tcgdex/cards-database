import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		pt: "Eevee",
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		it: "Eevee"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boosted Evolution",
			pt: "Impulso da Evolução",
			fr: "Évolution Boostée",
			de: "Evolutionsschub",
			es: "Evolución Potenciada",
			it: "Evoluzione Potenziata"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, ele poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, il peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann es sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			es: "Mientras este Pokémon esté en el Puesto Activo, puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			it: "Fintanto che questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o il turno in cui lo giochi."
		}
	}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],

			name: {
				en: "Reckless Charge",
				pt: "Carga Indomável",
				fr: "Attaque Imprudente",
				de: "Waghalsiger Sturmangriff",
				es: "Carga Descuidada",
				it: "Carica Avventata"
			},

			effect: {
				en: "This Pokémon also does 10 damage to itself.",
				pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
				fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
				de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
				es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 10 danni a se stesso."
			},

			damage: 30
		}
	],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Makura Tami"
}

export default card