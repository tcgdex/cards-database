import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Revive",
		'fr-fr': "Rappel",
		'es-es': "Revivir",
		'it-it': "Revitalizzante",
		'pt-br': "Reviver",
		'de-de': "Beleber"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		'en-us': "Put a Basic Pokémon from your discard pile onto your Bench.",
		'es-es': "Pon un Pokémon Básico de tu pila de descartes en tu Banca.",
		'it-it': "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
		'pt-br': "Coloque um Pokémon Básico da sua pilha de descarte em seu Banco.",
		'de-de': "Nimm 1 Basis-Pokémon von deinem Ablagestapel und lege es auf deine Bank."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279840,
		tcgplayer: 88726
	}
}

export default card
