import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou",
		it: "Raikou",
		es: "Raikou",
		pt: "Raikou",
		'es-mx': "Raikou"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Fall",
			fr: "Chute Électro",
			de: "Elektrofall",
			it: "Elettrocaduta",
			es: "Cascada Eléctrica",
			pt: "Queda Elétrica",
			'es-mx': "Declive Eléctrico"
		},

		effect: {
			en: "If you have at least 4 {L} Energy in play, this attack does 90 more damage.",
			fr: "Si vous avez au moins 4 Énergies {L} en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn du mindestens 4 {L}-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se hai almeno quattro Energie {L} in gioco, questo attacco infligge 90 danni in più.",
			es: "Si tienes por lo menos 4 Energías {L} en juego, este ataque hace 90 puntos de daño más.",
			pt: "Se você tiver pelo menos 4 Energias {L} em jogo, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si tienes al menos 4 Energías {L} en juego, este ataque hace 90 puntos de daño más."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654387
	}
}

export default card