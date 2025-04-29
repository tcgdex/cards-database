import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Bagon",
		fr: "Draby",
		es: "Bagon",
		de: "Kindwurm",
		it: "Bagon",
		pt: "Bagon",
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
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			de: "Biss",
			it: "Morso",
			pt: "Mordida",
			'es-mx': "Mordida"
		},

		damage: 10
	}, {
		cost: ["Fire", "Water"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			pt: "Carga Indomável",
			'es-mx': "Carga Temeraria"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
