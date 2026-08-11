import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Fossil Excavation Map",
		'fr-fr': "Carte d’Excavation de Fossiles",
		'es-es': "Mapa para Búsqueda de Fósiles",
		'it-it': "Mappa Scavafossili",
		'pt-br': "Mapa de Escavar Fósseis",
		'de-de': "Fossilausgrabungskarte"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez l’une de ces options :\n\n• Cherchez une carte Fossile Inconnu dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.\n• Ajoutez une carte Fossile Inconnu de votre pile de défausse à votre main.",
		'en-us': "Choose 1:\n\n•Search your deck for an Unidentified Fossil card, reveal it, and put it into your hand. Then, shuffle your deck.\n•Put an Unidentified Fossil card from your discard pile into your hand.",
		'es-es': "Elige 1 opción:\n\n• Busca en tu baraja 1 carta de Fósil Desconocido, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.\n• Pon 1 carta de Fósil Desconocido de tu pila de descartes en tu mano.",
		'it-it': "Scegli:\n\n• Cerca nel tuo mazzo una carta Fossile Sconosciuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.\n• Prendi una carta Fossile Sconosciuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		'pt-br': "Escolha 1:\n\n• Procure por 1 carta de Fóssil Não Identificado no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.\n• Coloque 1 carta de Fóssil Não Identificado da sua pilha de descarte na sua mão.",
		'de-de': "Wähle 1 aus:\n\n•Durchsuche dein Deck nach 1 Unbekanntes Fossil-Karte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.\n•Nimm 1 Unbekanntes Fossil-Karte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 355620,
		tcgplayer: 165770
	}
}

export default card
