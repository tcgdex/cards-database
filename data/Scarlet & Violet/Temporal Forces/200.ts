import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Explorer's Guidance",
		fr: "Guide d'Exploration",
		es: "Guía de Exploración",
		it: "Guida dell'Esploratore",
		pt: "Liderança do Explorador",
		de: "Führung des Entdeckers"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Look at the top 6 cards of your deck and put 2 of them into your hand. Discard the other cards.",
		fr: "Regardez les 6 cartes du dessus de votre deck, puis ajoutez 2 d'entre elles à votre main. Défaussez les autres cartes.",
		es: "Mira las 6 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Descarta el resto de las cartas.",
		it: "Guarda le prime sei carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Scarta le altre carte.",
		pt: "Olhe as 6 cartas de cima do seu baralho e coloque 2 delas na sua mão. Descarte as outras cartas.",
		de: "Schau dir die obersten 6 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Lege die anderen Karten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Hideki Ishikawa",

	thirdParty: {
		cardmarket: 760830
	}
}

export default card