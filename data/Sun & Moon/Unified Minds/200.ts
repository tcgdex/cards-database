import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Hapu",
		fr: "Paulie",
		es: "Hela",
		it: "Hapi",
		pt: "Lélia",
		de: "Hapu’u"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 6 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Défaussez les autres cartes.",
		en: "Look at the top 6 cards of your deck and put 2 of them into your hand. Discard the other cards.",
		es: "Mira las 6 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Descarta el resto de las cartas.",
		it: "Guarda le prime sei carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Scarta le altre carte.",
		pt: "Olhe as 6 primeiras cartas do seu baralho e coloque 2 delas na sua mão. Descarte as outras cartas.",
		de: "Schau dir die obersten 6 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Lege die anderen Karten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 388787,
		tcgplayer: 195255
	}
}

export default card
