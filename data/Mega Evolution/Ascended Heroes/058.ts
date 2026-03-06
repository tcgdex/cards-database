import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Voltorb ex",
		fr: "Voltorbe-ex",
		es: "Voltorb ex",
		'es-mx': "Voltorb ex",
		de: "Voltobal-ex",
		it: "Voltorb-ex",
		pt: "Voltorb ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hundred-Hitting Ball",
			fr: "Balle Cent Coups",
			es: "Bola Cien Golpes",
			'es-mx': "Bola Centimoledora",
			de: "Ball der hundert Schläge",
			it: "Palla Cento Colpi",
			pt: "Bola de Cem Golpes"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 100 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 100 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño más por cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño más por cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 100 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 100 danni in più ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 100 pontos de dano a mais para cada cara."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675870,
		cardmarket: 869669
	}
}

export default card