import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Sauvegarde d'Énergie",
		'de-de': "Energiezugewinnung",
		'it-it': "Recupero di Energia"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile.",
		'fr-fr': "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.",
		'de-de': "Tausche eine Karte auf Deiner Hand gegen bis zu 2 Basis-Energiekarten von Deinem Ablagestapel.",
		'it-it': "Scambia una delle altre carte che hai in mano con un massimo di 2 carte Energia base dalla tua pila degli scarti.",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273776,
				tcgplayer: 42427
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107078
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107078
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
