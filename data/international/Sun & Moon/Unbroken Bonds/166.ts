import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Devolution Spray Z",
		'fr-fr': "Spray Dés-Évoluant Z",
		'es-es': "Chorro de Devolución Z",
		'it-it': "Getto di Involuzione Z",
		'pt-br': "Spray de Involução Z",
		'de-de': "Rückentwicklungsspray Z"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Faites dés-évoluer l’un de vos Pokémon évolués en mélangeant le nombre voulu de cartes Évolution placées dessus avec votre deck. (Ce Pokémon ne peut pas évoluer pendant ce tour.)",
		'en-us': "Devolve 1 of your evolved Pokémon by shuffling any number of Evolution cards on it into your deck. (That Pokémon can’t evolve this turn.)",
		'es-es': "Involuciona a 1 de tus Pokémon evolucionados poniendo cualquier cantidad de cartas de Evolución que tenga sobre él en tu baraja y barajando todas las cartas. (Ese Pokémon no puede evolucionar en este turno).",
		'it-it': "Annulla l’evoluzione di uno dei tuoi Pokémon evoluti rimischiandone un numero qualsiasi di carte Evoluzione nel tuo mazzo. Quel Pokémon non può evolversi in questo turno.",
		'pt-br': "Reverta a evolução de 1 dos seus Pokémon evoluídos embaralhando qualquer número de cartas de Evolução sobre ele no seu baralho (aquele Pokémon não pode evoluir durante esta vez de jogar).",
		'de-de': "Rückentwickle 1 deiner entwickelten Pokémon, indem du beliebig viele auf ihm liegende Entwicklungskarten in dein Deck mischt. (Jenes Pokémon kann sich während dieses Zuges nicht entwickeln.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 372452,
		tcgplayer: 189266
	}
}

export default card
