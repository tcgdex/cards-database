import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Dark Patch",
		'fr-fr': "Fortifiant Obscur",
		'es-es': "Refuerzo Oscuro",
		'it-it': "Rinvigoscuro",
		'pt-br': "Fragmento Sombrio",
		'de-de': "Finsterpflaster"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Attach a basic Darkness Energy card from your discard pile to 1 of your Benched Darkness Pokémon.",
		'fr-fr': "Attachez une carte Énergie Darkness de base de votre pile de défausse à 1 de vos Pokémon Darkness de Banc.",
		'es-es': "Une una carta de Energía Darkness Básica de tu pila de descartes a 1 de tus Pokémon Darkness en Banca.",
		'it-it': "Assegna a uno dei tuoi Pokémon Darkness in panchina una carta Energia base Darkness dalla tua pila degli scarti.",
		'pt-br': "Ligue um card de Energia Darkness da sua pilha de descarte a 1 dos seus Pokémon Darkness no Banco.",
		'de-de': "Lege 1 Darkness-Basis-Energiekarte von deinem Ablagestapel an 1 Darkness-Pokémon auf deiner Bank an."
	},

	thirdParty: {
		cardmarket: 280421,
		tcgplayer: 84636
	}
}

export default card
