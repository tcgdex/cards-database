import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dark Patch",
		'fr-fr': "Fortifiant Obscur",
		'es-es': "Refuerzo Oscuro",
		'it-it': "Distintivo Oscuro",
		'pt-br': "Fragmento Sombrio",
		'de-de': "Finsterpflaster"
	},

	illustrator: "Ryo Ueda",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Attach a basic Darkness Energy card from your discard pile to 1 of your Benched Darkness Pokémon.",
		'fr-fr': "Attachez une carte Énergie Darkness de base de votre pile de défausse à l'un de vos Pokémon Darkness de Banc.",
		'es-es': "Une 1 carta de Energía Darkness Básica de tu pila de descartes a 1 de tus Pokémon Darkness en Banca.",
		'it-it': "Assegna a uno dei tuoi Pokémon Darkness in panchina una carta Energia base Darkness dalla tua pila degli scarti.",
		'pt-br': "Ligue 1 carta de Energia Darkness básica da sua pilha de descarte a 1 dos seus Pokémon Darkness no Banco.",
		'de-de': "Lege 1 Basis-Darkness-Energiekarte aus deinem Ablagestapel an 1 Darkness-Pokémon auf deiner Bank an."
	},

	trainerType: "Item",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 674222,
				tcgplayer: 284171
			}
		},
	],
}

export default card
