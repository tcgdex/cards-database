import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mars",
		fr: "Mars",
		es: "Venus",
		it: "Martes",
		de: "Mars",
		'pt-br': "Marte",
		ko: "마스"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "Your opponent shuffles their hand into their deck and draws a card for each of their remaining points needed to win.",
		fr: "Votre adversaire mélange sa main avec son deck et pioche une carte pour chaque point qui lui reste à gagner pour obtenir la victoire.",
		es: "Tu rival pone las cartas de su mano en su baraja, las baraja todas y roba una carta por cada uno de los puntos restantes que necesita para ganar.",
		it: "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e pesca una carta per ogni punto che deve ancora ottenere per vincere.",
		de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 1 Karte für jeden Punkt, der ihm zum Sieg fehlt.",
		'pt-br': "Seu oponente embaralha a própria mão no baralho dele e compra 1 carta para cada um dos pontos restantes que precisa para vencer.",
		ko: "상대의 패를 모두 덱으로 되돌린다. 상대는 상대 자신이 이기기 위해 필요한 남은 포인트의 수만큼 덱을 뽑는다."
	},

	trainerType: "Supporter",
	boosters: ["palkia"]
}

export default card