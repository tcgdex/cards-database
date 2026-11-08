import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Maxie's Hidden Ball Trick",
		'fr-fr': "Ruse de Max",
		'es-es': "Truco de la Bola Oculta de Magno",
		'it-it': "Doppio Passo di Max",
		'pt-br': "Truque da Bola Escondida de Maxie",
		'de-de': "Marcs Balltrick"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous pouvez jouer cette carte seulement lorsque c'est la dernière carte dans votre main.\n\nPlacez un Pokémon {F} de votre pile de défausse sur votre Banc. Ensuite, piochez 5 cartes.",
		'en-us': "You can play this card only when it is the last card in your hand.\n\nPut a {F} Pokémon from your discard pile onto your Bench. Then, draw 5 cards.",
		'es-es': "Puedes jugar esta carta solo cuando es la última carta en tu mano. Pon 1 Pokémon {F} de tu pila de descartes en tu Banca. Después, roba 5 cartas.",
		'it-it': "Puoi giocare questa carta solo se è l'ultima carta che hai in mano. Prendi un Pokémon {F} dalla tua pila degli scarti e mettilo in panchina. Poi pesca cinque carte.",
		'pt-br': "Você poderá jogar este card somente quando ele for o último card da sua mão. Coloque um Pokémon {F} da sua pilha de descarte no seu Banco. Em seguida, compre 5 cards.",
		'de-de': "Du kannst diese Karte nur dann spielen, wenn es die letzte Karte auf deiner Hand ist. Nimm 1 {F}-Pokémon von deinem Ablagestapel und lege es auf deine Bank. Ziehe anschließend 5 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 273664,
		tcgplayer: 96056
	}
}

export default card
