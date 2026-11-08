import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Blacksmith",
		'fr-fr': "Forgeron",
		'es-es': "Herrero",
		'it-it': "Fabbro",
		'pt-br': "Ferreiro",
		'de-de': "Schmied"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Attachez 2 cartes Énergie Fire de votre pile de défausse à l'un de vos Pokémon Fire.",
		'en-us': "Attach 2 Fire Energy cards from your discard pile to 1 of your Fire Pokémon.",
		'es-es': "Une 2 cartas de Energía Fire de tu pila de descartes a 1 de tus Pokémon Fire.",
		'it-it': "Assegna a uno dei tuoi Pokémon Fire due carte Energia Fire dalla tua pila degli scarti.",
		'pt-br': "Ligue 2 cards de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon Fire.",
		'de-de': "Lege 2 Fire-Energiekarten von deinem Ablagestapel an 1 deiner Fire-Pokémon an."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281571,
		tcgplayer: 91225
	}
}

export default card
