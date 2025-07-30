import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Search",
		fr: "Recherche d'Énergie",
		es: "Búsqueda de Energía",
		it: "Ricerca di Energia",
		pt: "Busca de Energia",
		de: "Energiesuche"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por 1 carta de Energia básica no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691847
	}
}

export default card