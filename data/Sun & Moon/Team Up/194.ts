import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Judge Whistle",
		fr: "Sifflet de Juge",
		es: "Silbato del Juez",
		it: "Fischietto dell’Arbitro",
		pt: "Apito do Juiz",
		de: "Richterpfeife"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez l’une de ces options :\n\n• Piochez une carte.\n• Placez une carte Juge de votre pile de défausse dans votre main.",
		en: "Choose 1:\n\n• Draw a card.\n• Put a Judge card from your discard pile into your hand.",
		es: "Elige 1 opción:\n\n• Roba 1 carta.\n• Pon 1 carta de Juez de tu pila de descartes en tu mano.",
		it: "Scegli:\n\n• Pesca una carta.\n• Prendi una carta Arbitro dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		pt: "Escolha 1:\n\n• Compre 1 carta.\n• Coloque 1 carta Juiz da sua pilha de descarte na sua mão.",
		de: "Wähle 1 aus:\n\n• Ziehe 1 Karte.\n• Nimm 1 Richter-Karte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 369072
	}
}

export default card
