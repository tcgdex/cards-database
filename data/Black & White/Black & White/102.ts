import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Revive",
		fr: "Rappel",
		es: "Revivir",
		it: "Revitalizzante",
		pt: "Reviver",
		de: "Beleber"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		en: "Put a Basic Pokémon from your discard pile onto your Bench.",
		es: "Pon un Pokémon Básico de tu pila de descartes en tu Banca.",
		it: "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
		pt: "Coloque um Pokémon Básico da sua pilha de descarte em seu Banco.",
		de: "Nimm 1 Basis-Pokémon von deinem Ablagestapel und lege es auf deine Bank."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279840,
		tcgplayer: 88726
	}
}

export default card
