import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Metal Saucer",
		'fr-fr': "Écusson Métal",
		'es-es': "Platillo Metálico",
		'it-it': "Piatto di Metallo",
		'pt-br': "Disco de Metal",
		'de-de': "Metallplatte"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach a Metal Energy card from your discard pile to 1 of your Benched Metal Pokémon.",
		'fr-fr': "Attachez une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon Metal de Banc.",
		'es-es': "Une 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon Metal en Banca.",
		'it-it': "Assegna a uno dei tuoi Pokémon Metal in panchina una carta Energia Metal dalla tua pila degli scarti.",
		'pt-br': "Ligue 1 carta de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon Metal no Banco.",
		'de-de': "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an 1 Metal-Pokémon auf deiner Bank an."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 439508,
		tcgplayer: 208499
	}
}

export default card
