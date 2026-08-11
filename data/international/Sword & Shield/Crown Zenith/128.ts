import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Search",
		'fr-fr': "Recherche d'Énergie",
		'es-es': "Búsqueda de Energía",
		'it-it': "Ricerca di Energia",
		'pt-br': "Busca de Energia",
		'de-de': "Energiesuche"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 carta de Energia básica no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",


	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691847,
				tcgplayer: 478176
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691847,
				tcgplayer: 478176
			}
		},
	],
}

export default card
