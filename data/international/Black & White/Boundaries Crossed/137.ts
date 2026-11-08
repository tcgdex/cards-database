import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Computer Search",
		'fr-fr': "Recherche Informatique",
		'es-es': "Búsqueda por Computadora",
		'it-it': "Ricerca Computerizzata",
		'pt-br': "Pesquisa no Computador",
		'de-de': "Computersuche"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'en-us': "Discard 2 cards from your hand. (If you can’t discard 2 cards, you can’t play this card.) Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Descarta 2 cartas de tu mano. (Si no puedes descartar 2 cartas, no puedes jugar esta carta.) Busca en tu baraja una carta y ponla en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Scarta due delle carte che hai in mano (se non puoi scartare due carte, non potrai giocare questa carta). Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Descarte 2 cards da sua mão. (Se você não puder descartar 2 cards, não poderá jogar esse card.) Procure um card em seu baralho e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. (Wenn du keine 2 Karten auf deinen Ablagestapel legen kannst, kannst du diese Karte nicht spielen.) Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280724,
		tcgplayer: 84416
	}
}

export default card
