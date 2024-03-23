import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Wugtrio",
		fr: "Triopikeau",
		es: "Wugtrio",
		it: "Wugtrio",
		pt: "Wugtrio"
	},

	rarity: "Shiny rare",
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
			pt: "Cabeçada"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Undersea Tunnel",
			fr: "Tunnel Sous-Marin",
			es: "Túnel Submarino",
			it: "Tunnel Sommerso",
			pt: "Túnel Subaquático"
		},

		effect: {
			en: "Flip 3 coins. For each heads, discard the top 3 cards of your opponent's deck.",
			fr: "Lancez 3 pièces. Pour chaque côté face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			es: "Lanza 3 monedas. Por cada cara, descarta las 3 primeras cartas de la baraja de tu rival.",
			it: "Lancia tre volte una moneta. Ogni volta che esce testa, scarta le prime tre carte del mazzo del tuo avversario.",
			pt: "Jogue 3 moedas. Para cada cara, descarte as 3 cartas de cima do baralho do seu oponente."
		}
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card