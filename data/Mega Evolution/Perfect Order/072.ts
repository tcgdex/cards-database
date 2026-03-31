import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d'Énergie",
		es: "Búsqueda de Energía",
		de: "Energiesuche",
		it: "Ricerca di Energia",
		pt: "Busca de Energia"
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",
	illustrator: "Toyste Beach",
	effect: {
		en: "Search your deck for a Basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		de: "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		it: "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
		pt: "Procure por uma carta de Energia Básica no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
	},
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684322,
		cardmarket: 877488
	}
}

export default card
