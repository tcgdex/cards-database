import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Méga Canne",
		'en-us': "Super Rod",
		'es-es': "Supercaña",
		'it-it': "Canna da pesca super",
		'pt-br': "Supervara",
		'de-de': "Superangel"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Mélangez avec votre deck une combinaison d'un maximum de 3 Pokémon et cartes Énergie de base de votre pile de défausse.",
		'en-us': "Shuffle up to 3 in any combination of Pokémon and Basic Energy cards from your discard pile into your deck.",
		'es-es': "Pon, en cualquier combinación, hasta 3 cartas de Pokémon y de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia fino a tre Pokémon e carte Energia base in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe até 3 cartas de Pokémon e de Energia Básica da sua pilha de descarte no seu baralho em qualquer combinação.",
		'de-de': "Mische eine beliebige Kombination aus bis zu 3 Pokémon und Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715751,
				tcgplayer: 497697,
				cardtrader: 248929
			}
		},
	],

	illustrator: "Toyste Beach",

	
}

export default card
