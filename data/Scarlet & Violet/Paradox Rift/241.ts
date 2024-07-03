import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Rika",
		fr: "Cayenn",
		es: "Cayena",
		it: "Capsi",
		pt: "Kaya",
		de: "Cay"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Shuffle the other cards and put them on the bottom of your deck.",
		fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d'entre elles à votre main. Mélangez les autres cartes et placez-les en dessous de votre deck.",
		es: "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Baraja el resto de las cartas y ponlas en la parte inferior de tu baraja.",
		it: "Guarda le prime quattro carte del tuo mazzo e aggiungine due alle carte che hai in mano. Rimischia le altre carte e mettile in fondo al tuo mazzo.",
		pt: "Olhe as 4 cartas de cima do seu baralho e coloque 2 delas na sua mão. Embaralhe as outras cartas e coloque-as como as cartas de baixo do seu baralho.",
		de: "Schau dir die obersten 4 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Mische die anderen Karten und lege sie unter dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card