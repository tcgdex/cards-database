import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Energy Retrieval",
		fr: "Sauvegarde d'Énergie",
		de: "Energiezugewinnung",
		it: "Recupero di Energia"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.[1]",
		de: "Tausche eine Karte auf Deiner Hand gegen bis zu 2 Basis-Energiekarten von Deinem Ablagestapel.",
		it: "Scambia una delle altre carte che hai in mano con un massimo di 2 carte Energia base dalla tua pila degli scarti.",
	},

	thirdParty: {
		cardmarket: 273776,
		tcgplayer: 42427
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
