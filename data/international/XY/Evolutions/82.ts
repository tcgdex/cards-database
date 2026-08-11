import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Pokédex",
		'fr-fr': "Pokédex",
		'es-es': "Pokédex",
		'it-it': "Pokédex",
		'pt-br': "Pokédex",
		'de-de': "Pokédex"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 5 cartes du dessus de votre deck et replacez-les dans l'ordre de votre choix.",
		'en-us': "Look at the top 5 cards of your deck and put them back in any order.",
		'es-es': "Mira las 5 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
		'it-it': "Guarda le prime cinque carte del tuo mazzo e rimettile a posto nell'ordine che preferisci.",
		'pt-br': "Olhe os 5 primeiros cards do seu baralho e coloque-os de volta em qualquer ordem.",
		'de-de': "Schau dir die obersten 5 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 293444
	}
}

export default card
