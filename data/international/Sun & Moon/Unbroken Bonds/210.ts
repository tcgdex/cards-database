import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Janine",
		'fr-fr': "Jeannine",
		'es-es': "Sachiko",
		'it-it': "Nina",
		'pt-br': "Janine",
		'de-de': "Janina"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the top 4 cards of your deck and put 2 of them into your hand. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe as 4 primeiras cartas do seu baralho e coloque 2 delas na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		'de-de': "Schau dir die obersten 4 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 372491,
		tcgplayer: 189279
	}
}

export default card
