import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raifort",
		'fr-fr': "Mora",
		'es-es': "Cloe",
		'it-it': "Morasia",
		'pt-br': "Moira",
		'de-de': "Moira"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 5 cards of your deck and discard any number of them. Put the other cards back in any order.",
		'fr-fr': "Regardez les 5 cartes du dessus de votre deck et défaussez-en le nombre voulu. Replacez les autres cartes dans l'ordre de votre choix.",
		'es-es': "Mira las 5 primeras cartas de tu baraja y descarta cualquier cantidad de ellas. Vuelve a poner el resto de las cartas en la parte superior de tu baraja en el orden que quieras.",
		'it-it': "Guarda le prime cinque carte del tuo mazzo e scartane quante ne vuoi. Rimetti a posto le altre carte nell'ordine che preferisci.",
		'pt-br': "Olhe as 5 cartas de cima do seu baralho e descarte qualquer número delas. Coloque as outras cartas de volta em qualquer ordem.",
		'de-de': "Schau dir die obersten 5 Karten deines Decks an und lege beliebig viele von ihnen auf deinen Ablagestapel. Lege die anderen Karten in beliebiger Reihenfolge zurück auf dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769335,
				tcgplayer: 550205
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769335,
				tcgplayer: 550205
			}
		},
	],

	illustrator: "hncl",

}

export default card