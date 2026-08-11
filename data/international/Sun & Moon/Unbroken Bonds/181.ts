import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Molayne",
		'fr-fr': "Molène",
		'es-es': "Lario",
		'it-it': "Tapso",
		'pt-br': "Marcos",
		'de-de': "Marlon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous défaussez 2 cartes Énergie Metal de votre main.\n\nMélangez une carte Dresseur de votre pile de défausse avec votre deck.",
		'en-us': "You can play this card only if you discard 2 Metal Energy cards from your hand.\n\nShuffle a Trainer card from your discard pile into your deck.",
		'es-es': "Puedes jugar esta carta solo si descartas 2 cartas de Energía Metal de tu mano.\n\nPon 1 carta de Entrenador de tu pila de descartes en tu baraja y baraja todas las cartas.",
		'it-it': "Puoi giocare questa carta solo se scarti due carte Energia Metal che hai in mano.\n\nRimischia una carta Allenatore dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Você só pode jogar esta carta se descartar 2 cartas de Energia Metal da sua mão.\n\nEmbaralhe 1 carta de Treinador da sua pilha de descarte no seu baralho.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 2 Metal-Energiekarten aus deiner Hand auf deinen Ablagestapel legst.\n\nMische 1 Trainerkarte aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 372465,
		tcgplayer: 189287
	}
}

export default card
