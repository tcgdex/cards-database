import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's PP Up",
		'fr-fr': "PP Plus de N",
		'es-es': "Más PP de N",
		'de-de': "Ns AP-Plus",
		'it-it': "PP-su di N",
		'pt-br': "PP Up do N",
		'es-mx': "Más PP de N"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Attach a Basic Energy card from your discard pile to 1 of your Benched N's Pokémon.",
		'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de N de Banc.",
		'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon de N en Banca.",
		'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Ns Pokémon auf deiner Bank an.",
		'it-it': "Assegna a uno dei tuoi Pokémon di N in panchina una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "Ligue uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon do N no Banco.",
		'es-mx': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon de N en Banca."
	},

	trainerType: "Item",
	regulationMark: "I",
	illustrator: "Toyste Beach",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817305,
				tcgplayer: 623580
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817305,
				tcgplayer: 623580
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['player-rewards-program']
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
