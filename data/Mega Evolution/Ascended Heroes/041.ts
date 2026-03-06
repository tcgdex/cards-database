import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Totodile",
		fr: "Kaiminus",
		es: "Totodile",
		'es-mx': "Totodile",
		de: "Karnimani",
		it: "Totodile",
		pt: "Totodile"
	},

	illustrator: "REND",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [158],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Slight Intrusion",
			fr: "Légère Intrusion",
			es: "Ligera Intromisión",
			'es-mx': "Algo Metiche",
			de: "Vorwagen",
			it: "Coinvolgimento",
			pt: "Leve Invasão"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675853,
		cardmarket: 869652
	}
}

export default card