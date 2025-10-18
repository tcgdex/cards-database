import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz",
		it: "Electrike",
		es: "Electrike",
		pt: "Electrike",
		'es-mx': "Electrike"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [309],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Jolt",
			fr: "Secousse Tonnerre",
			de: "Donnerrüttler",
			it: "Scoppiotuono",
			es: "Sacudida Atronadora",
			pt: "Choque do Trovão",
			'es-mx': "Choque Trueno"
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

	thirdParty: {
		tcgplayer: 654388
	}
}

export default card