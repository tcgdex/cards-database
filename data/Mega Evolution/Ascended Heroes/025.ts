import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		'es-mx': "Entei",
		de: "Entei",
		it: "Entei",
		pt: "Entei"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	dexId: [244],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare Fall",
			fr: "Cascade Flamboyante",
			es: "Cascada Abrasadora",
			'es-mx': "Declive Ardiente",
			de: "Flammenfall",
			it: "Fuococaduta",
			pt: "Queda Ígnea"
		},

		effect: {
			en: "If you have at least 4 {R} Energy in play, this attack does 90 more damage.",
			fr: "Si vous avez au moins 4 Énergies {R} en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tienes por lo menos 4 Energías {R} en juego, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si tienes al menos 4 Energías {R} en juego, este ataque hace 90 puntos de daño más.",
			de: "Wenn du mindestens 4 {R}-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se hai almeno quattro Energie {R} in gioco, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver pelo menos 4 Energias {R} em jogo, este ataque causará 90 pontos de dano a mais."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675837,
		cardmarket: 869636
	}
}

export default card