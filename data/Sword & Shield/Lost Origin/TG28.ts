import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Opal",
		fr: "Sally",
		es: "Sally",
		it: "Poppy",
		pt: "Alba",
		de: "Papella"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Flip 2 coins. Search your deck for a number of cards up to the number of heads, put them into your hand, and shuffle your deck.",
		fr: "Lancez 2 pièces. Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de côtés face obtenus, ajoutez-les à votre main, puis mélangez votre deck.",
		es: "Lanza 2 monedas. Busca en tu baraja tantas cartas como veces haya salido cara, ponlas en tu mano y baraja las cartas de tu baraja.",
		it: "Lancia due volte una moneta. Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di volte in cui è uscito testa, aggiungile alle carte che hai in mano, poi rimischia le carte del tuo mazzo.",
		pt: "Jogue 2 moedas. Procure por um número de cartas no seu baralho até o número de caras, coloque-as na sua mão e embaralhe o seu baralho.",
		de: "Wirf 2 Münzen. Durchsuche dein Deck nach bis zu so vielen Karten, wie du Kopf geworfen hast, nimm sie auf deine Hand und mische dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card