import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Riley",
		fr: "Armand",
		es: "Quinoa",
		it: "Marisio",
		pt: "Riley",
		de: "Urs"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Reveal the top 5 cards of your deck and have your opponent choose 2 of them. Discard the chosen cards and put the remaining cards into your hand.",
		fr: "Montrez les 5 cartes du dessus de votre deck et demandez à votre adversaire d'en choisir 2. Défaussez les cartes choisies et placez les cartes restantes dans votre main.",
		es: "Enseña las 5 primeras cartas de tu baraja y haz que tu rival elija 2 de ellas. Descarta las cartas elegidas y pon el resto en tu mano.",
		it: "Mostra le prime cinque carte del tuo mazzo e fanne scegliere due al tuo avversario. Scarta le carte che ha scelto e aggiungi quelle rimanenti alle carte che hai in mano.",
		pt: "Revele as 5 cartas de cima do seu baralho e faça com que seu oponente escolha 2 delas. Descarte as cartas escolhidas e coloque as cartas restantes na sua mão.",
		de: "Zeige deinem Gegner die obersten 5 Karten deines Decks und veranlasse ihn dazu, 2 von ihnen zu wählen. Lege die gewählten Karten auf deinen Ablagestapel und nimm die verbleibenden Karten auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card