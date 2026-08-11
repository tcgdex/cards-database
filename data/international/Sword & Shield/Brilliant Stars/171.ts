import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marnie's Pride",
		'fr-fr': "Fierté de Rosemary",
		'es-es': "Orgullo de Roxy",
		'it-it': "Orgoglio di Mary",
		'pt-br': "Orgulho da Marine",
		'de-de': "Marys Stolz"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
		'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
		'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
		'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608717,
				tcgplayer: 263890
			}
		},
	],
}

export default card
