import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Ultra Ball",
		'fr-fr': "Hyper Ball",
		'es-es': "Ultra Ball",
		'it-it': "Ultra Ball",
		'pt-br': "Ultra Bola",
		'de-de': "Hyperball"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Discard 2 cards from your hand. (If you can't discard 2 cards, you can't play this card.) Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Descarta 2 cartas de tu mano. (Si no puedes descartar 2 cartas, no puedes jugar esta carta). Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Scarta due delle carte che hai in mano (se non puoi scartare due carte, non potrai giocare questa carta). Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Descarte 2 cards da sua mão. (Se você não puder descartar 2 cards, não poderá jogar esse card.) Procure um Pokémon em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. (Wenn du keine 2 Karten auf deinen Ablagestapel legen kannst, kannst du diese Karte nicht spielen.) Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289933,
		tcgplayer: 117886
	}
}

export default card
