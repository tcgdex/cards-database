import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raifort",
		'fr-fr': "Mora",
		'es-es': "Cloe",
		'pt-br': "Moira",
		'it-it': "Morasia",
		'de-de': "Moira"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 5 cards of your deck and discard any number of them. Put the other cards back in any order.",
		'fr-fr': "Regardez les 5 cartes du dessus de votre deck et défaussez-en le nombre voulu. Replacez les autres cartes dans l'ordre de votre choix.",
		'es-es': "Mira las 5 primeras cartas de tu baraja y descarta cualquier cantidad de ellas. Vuelve a poner el resto de las cartas en la parte superior de tu baraja en el orden que quieras.",
		'pt-br': "Olhe as 5 cartas de cima do seu baralho e descarte qualquer número delas. Coloque as outras cartas de volta em qualquer ordem.",
		'it-it': "Guarda le prime cinque carte del tuo mazzo e scartane quante ne vuoi. Rimetti a posto le altre carte nell'ordine che preferisci.",
		'de-de': "Schau dir die obersten 5 Karten deines Decks an und lege beliebig viele von ihnen auf deinen Ablagestapel. Lege die anderen Karten in beliebiger Reihenfolge zurück auf dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	illustrator: "hncl",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805536,
				tcgplayer: 610497
			}
		},
	],
}

export default card
