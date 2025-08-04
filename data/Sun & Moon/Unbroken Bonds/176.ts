import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Janine",
		fr: "Jeannine",
		es: "Sachiko",
		it: "Nina",
		pt: "Janine",
		de: "Janina"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Shuffle the other cards back into your deck.",
		es: "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		it: "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		pt: "Olhe as 4 primeiras cartas do seu baralho e coloque 2 delas na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		de: "Schau dir die obersten 4 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 372461,
		tcgplayer: 189280
	}
}

export default card
