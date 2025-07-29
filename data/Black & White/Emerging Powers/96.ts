import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Recycle",
		fr: "Recyclage",
		es: "Reciclaje",
		it: "Riciclo",
		pt: "Reciclagem",
		de: "Aufbereitung"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, placez une carte de votre pile de défausse sur le dessus de votre deck.",
		en: "Flip a coin. If heads, put a card from your discard pile on top of your deck.",
		es: "Puedes jugar tantas cartas de Objeto como quieras durante tu turno (antes de tu ataque).",
		it: "Puoi giocare tutte le carte Strumento che vuoi durante il tuo turno, prima di attaccare.",
		pt: "Jogue uma moeda. Se sair cara, coloque um card da sua pilha de descarte em cima do seu baralho.",
		de: "Wirf 1 Münze. Lege bei „Kopf“ 1 Karte von deinem Ablagestapel auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280061
	}
}

export default card
