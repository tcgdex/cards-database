import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [589],
	set: Set,

	name: {
		en: "Escavalier",
		fr: "Lançargot",
		de: "Cavalanzas",
		it: "Escavalier",
		pt: "Escavalier",
		es: "Escavalier",
		'es-mx': "Escavalier"
	},

	illustrator: "Uta",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
		de: "Laukaps",
		it: "Karrablast",
		pt: "Karrablast",
		es: "Karrablast",
		'es-mx': "Karrablast"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Wild Lances",
			fr: "Lances Sauvages",
			de: "Wilde Lanzen",
			it: "Lance Feroci",
			pt: "Lanças Selvagens",
			es: "Lanzas Salvajes",
			'es-mx': "Lanzas Salvajes"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836197
	}
}

export default card