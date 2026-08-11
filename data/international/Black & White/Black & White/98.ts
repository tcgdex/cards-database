import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Pokédex",
		'fr-fr': "Pokédex",
		'es-es': "Pokédex",
		'it-it': "Pokédex",
		'pt-br': "Pokédex",
		'de-de': "Pokédex"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l’ordre de votre choix.",
		'en-us': "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
		'es-es': "Mira las 5 primeras cartas de tu baraja y vuelve a colocarlas en la parte superior de tu baraja en el orden que quieras.",
		'it-it': "Guarda le prime cinque carte del tuo mazzo e rimettile in cima al mazzo nell’ordine che preferisci.",
		'pt-br': "Olhe os 5 cards de cima do seu baralho e coloque-os de volta em cima do seu baralho em qualquer ordem.",
		'de-de': "Schau dir die obersten 5 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279836
	}
}

export default card
