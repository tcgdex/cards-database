import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Recycle",
		'fr-fr': "Recyclage",
		'es-es': "Reciclaje",
		'it-it': "Riciclo",
		'pt-br': "Reciclagem",
		'de-de': "Aufbereitung"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, placez une carte de votre pile de défausse sur le dessus de votre deck.",
		'en-us': "Flip a coin. If heads, put a card from your discard pile on top of your deck.",
		'es-es': "Puedes jugar tantas cartas de Objeto como quieras durante tu turno (antes de tu ataque).",
		'it-it': "Puoi giocare tutte le carte Strumento che vuoi durante il tuo turno, prima di attaccare.",
		'pt-br': "Jogue uma moeda. Se sair cara, coloque um card da sua pilha de descarte em cima do seu baralho.",
		'de-de': "Wirf 1 Münze. Lege bei „Kopf“ 1 Karte von deinem Ablagestapel auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280061,
		tcgplayer: 88653
	}
}

export default card
