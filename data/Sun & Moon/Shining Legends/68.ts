import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
		es: "Ultra Ball",
		it: "Ultra Ball",
		pt: "Ultra Bola",
		de: "Hyperball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 cartes de votre main. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Discard 2 cards from your hand. If you do, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		es: "Descarta 2 cartas de tu mano. Si lo haces, busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Scarta due delle carte che hai in mano. Se lo fai, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Descarte 2 cartas da sua mão. Se fizer isto, procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Lege 2 Karten aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 302205,
		tcgplayer: 146727
	}
}

export default card
