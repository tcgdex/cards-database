import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Red’s Challenge",
		'fr-fr': "Défi de Red",
		'es-es': "Desafío de Rojo",
		'it-it': "Sfida di Rosso",
		'pt-br': "Desafio do Red",
		'de-de': "Rots Herausforderung"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'en-us': "You can play this card only if you discard 2 other cards from your hand.\n\nSearch your deck for a card and put it into your hand. Then, shuffle your deck.",
		'es-es': "Puedes jugar esta carta solo si descartas otras 2 cartas de tu mano.\n\nBusca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Puoi giocare questa carta solo se scarti altre due carte che hai in mano.\n\nCerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Você só pode jogar esta carta se descartar outras 2 cartas da sua mão.\n\nProcure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legst.\n\nDurchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},
	trainerType: "Supporter",

}

export default card
