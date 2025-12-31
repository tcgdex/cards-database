import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Suicune",
		fr: "Suicune",
		es: "Suicune",
		'es-mx': "Suicune",
		de: "Suicune",
		it: "Suicune",
		pt: "Suicune"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",
	dexId: [245],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Crystal Fall",
			fr: "Chute Cristalline",
			es: "Cascada Cristalina",
			'es-mx': "Declive Cristalino",
			de: "Kristallfall",
			it: "Cristalcaduta",
			pt: "Queda Cristalina"
		},

		effect: {
			en: "If you have at least 4 {W} Energy in play, this attack does 90 more damage.",
			fr: "Si vous avez au moins 4 Énergies {W} en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tienes por lo menos 4 Energías {W} en juego, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si tienes al menos 4 Energías {W} en juego, este ataque hace 90 puntos de daño más.",
			de: "Wenn du mindestens 4 {W}-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se hai almeno quattro Energie {W} in gioco, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver pelo menos 4 Energias {W} em jogo, este ataque causará 90 pontos de dano a mais."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857601
	}
}

export default card