import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Judge Whistle",
		'fr-fr': "Sifflet de Juge",
		'es-es': "Silbato del Juez",
		'it-it': "Fischietto dell’Arbitro",
		'pt-br': "Apito do Juiz",
		'de-de': "Richterpfeife"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez l’une de ces options :\n\n• Piochez une carte.\n• Placez une carte Juge de votre pile de défausse dans votre main.",
		'en-us': "Choose 1:\n\n• Draw a card.\n• Put a Judge card from your discard pile into your hand.",
		'es-es': "Elige 1 opción:\n\n• Roba 1 carta.\n• Pon 1 carta de Juez de tu pila de descartes en tu mano.",
		'it-it': "Scegli:\n\n• Pesca una carta.\n• Prendi una carta Arbitro dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		'pt-br': "Escolha 1:\n\n• Compre 1 carta.\n• Coloque 1 carta Juiz da sua pilha de descarte na sua mão.",
		'de-de': "Wähle 1 aus:\n\n• Ziehe 1 Karte.\n• Nimm 1 Richter-Karte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 369072,
		tcgplayer: 183943
	}
}

export default card
