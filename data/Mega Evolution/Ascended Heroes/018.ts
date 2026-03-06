import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Tarountula",
		fr: "Tissenboule de la Team Rocket",
		es: "Tarountula del Team Rocket",
		'es-mx': "Tarountula del Equipo Rocket",
		de: "Team Rockets Tarundel",
		it: "Tarountula del Team Rocket",
		pt: "Tarountula da Equipe Rocket"
	},

	illustrator: "Saboteri",
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
			es: "Derribo",
			'es-mx': "Derribo",
			de: "Bodycheck",
			it: "Riduttore",
			pt: "Desmantelar"
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

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675830,
		cardmarket: 869629
	}
}

export default card