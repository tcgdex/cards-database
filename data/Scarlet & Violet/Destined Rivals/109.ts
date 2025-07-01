import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arven's Toedscool",
		fr: "Terracool de Pepper",
		de: "Peppers Tentagra",
		it: "Toedscool di Pepe",
		es: "Toedscool de Damián",
		pt: "Toedscool do Arven",
		'es-mx': "Toedscool de Damián"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slight Intrusion",
			fr: "Légère Intrusion",
			de: "Vorwagen",
			it: "Coinvolgimento",
			es: "Ligera Intromisión",
			pt: "Leve Invasão",
			'es-mx': "Algo Metiche"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
