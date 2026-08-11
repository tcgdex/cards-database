import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Revive",
		'fr-fr': "Rappel",
		'es-es': "Revivir",
		'it-it': "Revitalizzante",
		'pt-br': "Reviver",
		'de-de': "Beleber"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		'en-us': "Put a Basic Pokémon from your discard pile onto your Bench.",
		'es-es': "Pon 1 Pokémon Básico de tu pila de descartes en tu Banca.",
		'it-it': "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
		'pt-br': "Coloque um Pokémon Básico da sua pilha de descarte no seu Banco.",
		'de-de': "Nimm 1 Basis-Pokémon von deinem Ablagestapel und lege es auf deine Bank."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 282756,
		tcgplayer: 98124
	}
}

export default card
