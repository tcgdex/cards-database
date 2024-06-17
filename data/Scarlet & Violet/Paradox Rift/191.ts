import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [767],
	set: Set,

	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		de: "Reißlaus"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sneaky Snacking",
			fr: "Pique-Assiette",
			es: "Bocadito Furtivo",
			it: "Merenda Furtiva",
			pt: "Lanchar de Fininho",
			de: "Heimtückischer Happen"
		},

		effect: {
			en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card