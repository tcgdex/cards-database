import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [371],
	set: Set,

	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'de-de': "Kindwurm",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'es-mx': "Bagon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'es-mx': "Mordida"
		},

		damage: 10
	}, {
		cost: ["Fire", "Water"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'es-mx': "Carga Temeraria"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "Miki Tanaka",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817264,
				tcgplayer: 623539
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817264,
				tcgplayer: 623539
			}
		},
	],
}

export default card
