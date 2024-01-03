import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Lairon",
		fr: "Galegon",
		es: "Lairon",
		it: "Lairon",
		pt: "Lairon",
		de: "Stollrak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
		es: "Aron",
		it: "Aron",
		pt: "Aron",
		de: "Stollunior"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			it: "Confronto",
			pt: "Confrontar",
			de: "Konfrontieren"
		},

		damage: 40
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Wreak Havoc",
			fr: "Ravages",
			es: "Sembrar el Caos",
			it: "Scombussolare",
			pt: "Causar Estragos",
			de: "Chaos anrichten"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Jogue 1 moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card