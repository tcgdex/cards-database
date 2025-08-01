import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Revive",
		fr: "Rappel",
		es: "Revivir",
		it: "Revitalizzante",
		pt: "Reviver",
		de: "Beleber"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		en: "Put a Basic Pokémon from your discard pile onto your Bench.",
		es: "Pon 1 Pokémon Básico de tu pila de descartes en tu Banca.",
		it: "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
		pt: "Coloque um Pokémon Básico da sua pilha de descarte no seu Banco.",
		de: "Nimm 1 Basis-Pokémon von deinem Ablagestapel und lege es auf deine Bank."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 293447
	}
}

export default card
