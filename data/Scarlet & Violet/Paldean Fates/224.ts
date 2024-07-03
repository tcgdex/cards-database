import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Wugtrio",
		fr: "Triopikeau",
		es: "Wugtrio",
		it: "Wugtrio",
		de: "Schligdri"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Undersea Tunnel",
			fr: "Tunnel Sous-Marin",
			es: "Túnel Submarino",
			it: "Tunnel Sommerso",
			de: "Tiefseetunnel"
		},

		effect: {
			en: "Flip 3 coins. For each heads, discard the top 3 cards of your opponent's deck.",
			fr: "Lancez 3 pièces. Pour chaque côté face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			es: "Lanza 3 monedas. Por cada cara, descarta las 3 primeras cartas de la baraja de tu rival.",
			it: "Lancia tre volte una moneta. Ogni volta che esce testa, scarta le prime tre carte del mazzo del tuo avversario.",
			de: "Wirf 3 Münzen. Lege pro Kopf die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card