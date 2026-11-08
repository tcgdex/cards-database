import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Explorer's Guidance",
		'fr-fr': "Guide d'Exploration",
		'es-es': "Guía de Exploración",
		'pt-br': "Liderança do Explorador",
		'it-it': "Guida dell'Esploratore",
		'de-de': "Führung des Entdeckers"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 6 cards of your deck and put 2 of them into your hand. Discard the other cards.",
		'fr-fr': "Regardez les 6 cartes du dessus de votre deck, puis ajoutez 2 d'entre elles à votre main. Défaussez les autres cartes.",
		'es-es': "Mira las 6 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Descarta el resto de las cartas.",
		'pt-br': "Olhe as 6 cartas de cima do seu baralho e coloque 2 delas na sua mão. Descarte as outras cartas.",
		'it-it': "Guarda le prime sei carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Scarta le altre carte.",
		'de-de': "Schau dir die obersten 6 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Lege die anderen Karten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "H",
	illustrator: "Hideki Ishikawa",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805501,
				tcgplayer: 610462
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805501,
				tcgplayer: 610462
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806570,
				tcgplayer: 610618
			}
		},
	],
}

export default card
