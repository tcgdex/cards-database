import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Rotom Phone",
		'fr-fr': "Motismart",
		'es-es': "SmartRotom",
		'it-it': "Smart Rotom",
		'pt-br': "Rotom Fone",
		'de-de': "Smart-Rotom"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at the top 5 cards of your deck, choose 1 of them, and shuffle the other cards back into your deck. Then, put the card you chose on top of your deck.",
		'fr-fr': "Regardez les 5 cartes du dessus de votre deck, choisissez l'une d'elles, puis mélangez les autres cartes avec votre deck. Ensuite, placez la carte que vous avez choisie sur le dessus de votre deck.",
		'es-es': "Mira las 5 primeras cartas de tu baraja, elige 1 de ellas y pon el resto de las cartas de nuevo en tu baraja y barájalas todas. Después, pon la carta que has elegido en la parte superior de tu baraja.",
		'it-it': "Guarda le prime cinque carte del tuo mazzo, scegline una e rimischia le altre carte nel tuo mazzo. Poi metti la carta che hai scelto in cima al tuo mazzo.",
		'pt-br': "Olhe as 5 cartas de cima do seu baralho, escolha 1 delas e embaralhe as demais cartas de volta no seu baralho. Em seguida, coloque a carta escolhida como a carta de cima do seu baralho.",
		'de-de': "Schau dir die obersten 5 Karten deines Decks an, wähle 1 von ihnen und mische die anderen Karten zurück in dein Deck. Lege anschließend die von dir gewählte Karte oben auf dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500175,
		tcgplayer: 223064
	}
}

export default card
