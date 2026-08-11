import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Search",
		'fr-fr': "Recherche d’Énergie",
		'es-es': "Búsqueda de Energía",
		'it-it': "Ricerca di Energia",
		'pt-br': "Busca de Energia",
		'de-de': "Energiesuche"
	},

	rarity: "None",
	category: "Trainer",
	illustrator: "Ryo Ueda",

	effect: {
		'en-us': "Search your deck for a basic Energy card, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja una carta de Energía Básica, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure um card de Energia básica no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280069,
				tcgplayer: 98697
			}
		},
	],

}

export default card
