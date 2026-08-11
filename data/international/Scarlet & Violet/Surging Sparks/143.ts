import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Boosted Evolution",
			'fr-fr': "Évolution Boostée",
			'es-es': "Evolución Potenciada",
			'it-it': "Evoluzione Potenziata",
			'pt-br': "Impulso da Evolução",
			'de-de': "Evolutionsschub"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, il peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, ele poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann es sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794516,
				tcgplayer: 589932
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794516,
				tcgplayer: 589932
			}
		},
	],

	illustrator: "Naoyo Kimura",

}

export default card
