import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrogue",
		fr: "Debugant",
		de: "Rabauz",
		it: "Tyrogue",
		es: "Tyrogue",
		pt: "Tyrogue",
		'es-mx': "Tyrogue"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [236],

	attacks: [{
		name: {
			en: "Pow-Pow Punching",
			fr: "Frappe Bim Bim",
			de: "Haui-Aui-Hiebe",
			it: "Pugni Pow Pow",
			es: "Puñetazo Zas Zas",
			pt: "Soco Soco Bate Bate",
			'es-mx': "Chiquipaliza"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara."
		},

		damage: "10+"
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654410,
		cardmarket: 851142
	}
}

export default card