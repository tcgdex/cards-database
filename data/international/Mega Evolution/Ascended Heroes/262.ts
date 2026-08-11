import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's PP Up",
		'fr-fr': "PP Plus de N",
		'es-es': "Más PP de N",
		'es-mx': "Más PP de N",
		'de-de': "Ns AP-Plus",
		'it-it': "PP-su di N",
		'pt-br': "PP Up do N"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Attach a Basic Energy card from your discard pile to 1 of your Benched N's Pokémon.",
		'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de N de Banc.",
		'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon de N en Banca.",
		'es-mx': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon de N en Banca.",
		'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Ns Pokémon auf deiner Bank an.",
		'it-it': "Assegna a uno dei tuoi Pokémon di N in panchina una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "Ligue uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon do N no Banco."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869873,
				tcgplayer: 676074
			}
		}
	],
}

export default card
