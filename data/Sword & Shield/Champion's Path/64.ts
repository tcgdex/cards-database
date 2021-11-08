import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Rotom Phone",
		fr: "Motismart",
		es: "SmartRotom",
		it: "Smart Rotom",
		pt: "Rotom Fone",
		de: "Smart-Rotom"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at the top 5 cards of your deck, choose 1 of them, and shuffle the other cards back into your deck. Then, put the card you chose on top of your deck.",
		fr: "Regardez les 5 cartes du dessus de votre deck, choisissez l'une d'elles, puis mélangez les autres cartes avec votre deck. Ensuite, placez la carte que vous avez choisie sur le dessus de votre deck.",
		es: "Mira las 5 primeras cartas de tu baraja, elige 1 de ellas y pon el resto de las cartas de nuevo en tu baraja y barájalas todas. Después, pon la carta que has elegido en la parte superior de tu baraja.",
		it: "Guarda le prime cinque carte del tuo mazzo, scegline una e rimischia le altre carte nel tuo mazzo. Poi metti la carta che hai scelto in cima al tuo mazzo.",
		pt: "Olhe as 5 cartas de cima do seu baralho, escolha 1 delas e embaralhe as demais cartas de volta no seu baralho. Em seguida, coloque a carta escolhida como a carta de cima do seu baralho.",
		de: "Schau dir die obersten 5 Karten deines Decks an, wähle 1 von ihnen und mische die anderen Karten zurück in dein Deck. Lege anschließend die von dir gewählte Karte oben auf dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
