import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Colress's Experiment",
		fr: "Expérience de Nikolaï",
		es: "Experimento de Acromo",
		it: "Esperimento di Acromio",
		pt: "Experimento do Colress",
		de: "Achromas' Experiment"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Look at the top 5 cards of your deck and put 3 of them into your hand. Put the other cards in the Lost Zone.",
		fr: "Regardez les 5 cartes du dessus de votre deck, puis ajoutez 3 d'entre elles à votre main. Placez les autres cartes dans la Zone Perdue.",
		es: "Mira las 5 primeras cartas de tu baraja y pon 3 de ellas en tu mano. Pon el resto de las cartas en la Zona Perdida.",
		it: "Guarda le prime cinque carte del tuo mazzo e aggiungi tre di esse alle carte che hai in mano. Metti le altre carte nell'area perduta.",
		pt: "Olhe as 5 cartas de cima do seu baralho e coloque 3 delas na sua mão. Coloque as outras cartas na Zona Perdida.",
		de: "Schau dir die obersten 5 Karten deines Decks an und nimm 3 von ihnen auf deine Hand. Lege die anderen Karten ins Nirgendwo."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670820,
		tcgplayer: 284160
	}
}

export default card