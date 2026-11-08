import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Cassius",
		'fr-fr': "Olivier",
		'es-es': "Olivier",
		'it-it': "Oliviero",
		'pt-br': "Cassius",
		'de-de': "Olivier"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez l'un de vos Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		'en-us': "Shuffle 1 of your Pokémon and all cards attached to it into your deck.",
		'es-es': "Pon 1 de tus Pokémon y todas las cartas unidas a él en tu baraja, y barájalas todas.",
		'it-it': "Rimischia uno dei tuoi Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
		'pt-br': "Embaralhe 1 dos seus Pokémon e todos os cards ligados a ele em seu baralho.",
		'de-de': "Mische 1 deiner Pokémon und alle an es angelegten Karten zurück in dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281452,
		tcgplayer: 84124
	}
}

export default card
