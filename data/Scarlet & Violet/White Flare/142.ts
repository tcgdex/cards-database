import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		es: "Zorua",
		'es-mx': "Zorua"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			de: "Bodycheck",
			it: "Riduttore",
			pt: "Desmantelar",
			es: "Derribo",
			'es-mx': "Derribo"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836168
	}
}

export default card