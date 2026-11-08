import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Aqua Patch",
		'fr-fr': "Fortifiant Aquatique",
		'es-es': "Refuerzo Agua",
		'it-it': "Distintivo Acqua",
		'pt-br': "Fragmento Aquático",
		'de-de': "Wasserpflaster"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Attachez une carte Énergie Water de votre pile de défausse à l’un de vos Pokémon Water de Banc.",
		'en-us': "Attach a Water Energy card from your discard pile to 1 of your Benched Water Pokémon.",
		'es-es': "Une 1 carta de Energía Water de tu pila de descartes a 1 de tus Pokémon Water en Banca.",
		'it-it': "Assegna a uno dei tuoi Pokémon Water in panchina una carta Energia Water dalla tua pila degli scarti.",
		'pt-br': "Ligue 1 carta de Energia Water da sua pilha de descarte a 1 dos seus Pokémon Water no Banco.",
		'de-de': "Lege 1 Water-Energiekarte aus deinem Ablagestapel an 1 Water-Pokémon auf deiner Bank an."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 297571,
		tcgplayer: 131039
	}
}

export default card
