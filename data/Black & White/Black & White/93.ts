import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d’Énergie",
		es: "Búsqueda de Energía",
		it: "Ricerca di Energia",
		pt: "Busca de Energia",
		de: "Energiesuche"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Shuffle your deck afterward.",
		es: "Busca en tu baraja una carta de Energía Básica, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		it: "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure um card de Energia básica no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe seu baralho.",
		de: "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279831,
		tcgplayer: 85249
	}
}

export default card
