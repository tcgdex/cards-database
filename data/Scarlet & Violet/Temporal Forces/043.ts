import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		es: "Sharpedo",
		it: "Sharpedo",
		pt: "Sharpedo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Chew Off",
			fr: "Dévoré Retiré",
			es: "Desmenuzar",
			it: "Staccamorso",
			pt: "Mastigar e Cuspir"
		},

		effect: {
			en: "Flip 3 coins. For each heads, discard a random card from your opponent's hand.",
			fr: "Lancez 3 pièces. Pour chaque côté face, défaussez au hasard une carte de la main de votre adversaire.",
			es: "Lanza 3 monedas. Por cada cara, descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Lancia tre volte una moneta. Ogni volta che esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Jogue 3 moedas. Para cada cara, descarte uma carta aleatória da mão do seu oponente."
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card