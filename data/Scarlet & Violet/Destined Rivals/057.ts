import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Wugtrio",
		fr: "Triopikeau",
		de: "Schligdri",
		it: "Wugtrio",
		es: "Wugtrio",
		pt: "Wugtrio"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			it: "Bottintesta",
			es: "Golpe Cabeza",
			pt: "Cabeçada"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Undersea Tunnel",
			fr: "Tunnel Sous-Marin",
			de: "Tiefseetunnel",
			it: "Tunnel Sommerso",
			es: "Túnel Submarino",
			pt: "Túnel Subaquático"
		},

		effect: {
			en: "Flip 3 coins. For each heads, discard the top 3 cards of your opponent's deck.",
			fr: "Lancez 3 pièces. Pour chaque côté face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			de: "Wirf 3 Münzen. Lege pro Kopf die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel.",
			it: "Lancia tre volte una moneta. Ogni volta che esce testa, scarta le prime tre carte del mazzo del tuo avversario.",
			es: "Lanza 3 monedas. Por cada cara, descarta las 3 primeras cartas de la baraja de tu rival.",
			pt: "Jogue 3 moedas. Para cada cara, descarte as 3 cartas de cima do baralho do seu oponente."
		}
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card