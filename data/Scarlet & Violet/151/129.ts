import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Magicarpe",
		en: "Magikarp",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Trempette Trempée",
			en: "Splashy Splash",
			es: "Salpicadura Salpicona",
			it: "Splash Grandioso",
			pt: "Borrifada Borrifante",
			de: "Platschiger Platscher"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, piochez une carte.",
			en: "Flip a coin until you get tails. For each heads, draw a card.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, compre uma carta.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Ziehe pro Kopf 1 Karte."
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card