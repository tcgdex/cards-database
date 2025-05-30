import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Tarountula",
		fr: "Tissenboule de la Team Rocket",
		de: "Team Rockets Tarundel",
		it: "Tarountula del Team Rocket",
		es: "Tarountula del Team Rocket",
		pt: "Tarountula da Equipe Rocket",
		'es-mx': "Tarountula del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			de: "Bodycheck",
			it: "Riduttore",
			es: "Derribo",
			pt: "Desmantelar",
			'es-mx': "Derribo"
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
		holo: false
	}
}

export default card