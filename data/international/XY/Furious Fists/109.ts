import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Battle Reporter",
		'fr-fr': "Journaliste des Combats",
		'es-es': "Reportero de Combates",
		'it-it': "Inviato Speciale",
		'pt-br': "Repórter de Batalha",
		'de-de': "Kampfreporter"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez le même nombre de cartes dans votre main que votre adversaire.",
		'en-us': "Draw cards until you have the same number of cards in your hand as your opponent.",
		'es-es': "Roba cartas hasta que tengas el mismo número de cartas en tu mano que tu rival.",
		'it-it': "Pesca fino ad avere in mano lo stesso numero di carte del tuo avversario.",
		'pt-br': "Compre cards até ter em sua mão o mesmo número de cards do seu oponente.",
		'de-de': "Ziehe so lang Karten, bis du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281752,
		tcgplayer: 92269
	}
}

export default card
