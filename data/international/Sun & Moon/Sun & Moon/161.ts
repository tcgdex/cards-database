import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Ultra Ball",
		'fr-fr': "Hyper Ball",
		'es-es': "Ultra Ball",
		'it-it': "Ultra Ball",
		'pt-br': "Ultra Bola",
		'de-de': "Hyperball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez 2 cartes de votre main. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Discard 2 cards from your hand. If you do, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'es-es': "Descarta 2 cartas de tu mano. Si lo haces, busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Scarta due delle carte che hai in mano. Se lo fai, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Descarte 2 cartas da sua mão. Se fizer isto, procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Lege 2 Karten aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295474,
		tcgplayer: 127200
	}
}

export default card
