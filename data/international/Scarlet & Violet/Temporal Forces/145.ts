import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ciphermaniac's Codebreaking",
		'fr-fr': "Décodage de Décryptomane",
		'es-es': "Ciberentusiasta Descifracódigos",
		'it-it': "Decrittazione Esperta",
		'pt-br': "Decodificação da Criptomaníaca",
		'de-de': "Ciphermaniacs Decodierung"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for 2 cards, shuffle your deck, then put those cards on top of it in any order.",
		'fr-fr': "Cherchez 2 cartes dans votre deck. Mélangez votre deck, puis placez ces cartes sur le dessus de votre deck dans l'ordre de votre choix.",
		'es-es': "Busca en tu baraja 2 cartas, baraja las cartas de tu baraja y, luego, pon esas cartas en la parte superior de tu baraja en el orden que quieras.",
		'it-it': "Cerca nel tuo mazzo due carte, rimischia le carte del tuo mazzo, poi metti quelle carte in cima al mazzo nell'ordine che preferisci.",
		'pt-br': "Procure por 2 cartas no seu baralho, embaralhe o seu baralho e, em seguida, coloque aquelas cartas como as cartas de cima do seu baralho em qualquer ordem.",
		'de-de': "Durchsuche dein Deck nach 2 Karten, mische dein Deck und lege jene Karten anschließend in beliebiger Reihenfolge auf dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760775,
				tcgplayer: 542660
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760775,
				tcgplayer: 542660
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Taira Akitsu",

}

export default card