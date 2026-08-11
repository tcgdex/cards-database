import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee",
		'pt-br': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'it-it': "Eevee"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Boosted Evolution",
			'pt-br': "Impulso da Evolução",
			'fr-fr': "Évolution Boostée",
			'de-de': "Evolutionsschub",
			'es-es': "Evolución Potenciada",
			'it-it': "Evoluzione Potenziata"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, ele poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, il peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann es sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o il turno in cui lo giochi."
		}
	}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],

			name: {
				'en-us': "Reckless Charge",
				'pt-br': "Carga Indomável",
				'fr-fr': "Attaque Imprudente",
				'de-de': "Waghalsiger Sturmangriff",
				'es-es': "Carga Descuidada",
				'it-it': "Carica Avventata"
			},

			effect: {
				'en-us': "This Pokémon also does 10 damage to itself.",
				'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
				'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
				'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 10 danni a se stesso."
			},

			damage: 30
		}
	],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Makura Tami",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805370,
				tcgplayer: 610757
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 806407,
				tcgplayer: 610758
			},
		}
	],
}

export default card
