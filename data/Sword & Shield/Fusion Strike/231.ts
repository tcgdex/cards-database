import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Crossceiver",
		fr: "Récepteur Croisé",
		es: "Walkie-talkies Cruzados",
		it: "Ricevitore Incrociato",
		pt: "Receptor Cruzado",
		de: "Cross-Transceiver"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You must play 2 Crossceiver cards at once. (This effect works one time for 2 cards.)\n\nPut a Pokémon or a Supporter card from your discard pile into your hand.",
		fr: "Vous devez jouer 2 cartes Récepteur Croisé à la fois. (Cet effet agit une fois pour 2 cartes.)\nAjoutez un Pokémon ou une carte Supporter de votre pile de défausse à votre main.",
		es: "Debes jugar 2 cartas de Walkie-talkies Cruzados de una vez. (Este efecto funciona una vez por 2 cartas).\nPon 1 Pokémon o 1 carta de Partidario de tu pila de descartes en tu mano.",
		it: "Devi giocare due Ricevitore Incrociato alla volta. Questo effetto si applica una volta ogni due carte.\nPrendi un Pokémon o una carta Aiuto dalla tua pila degli scarti e aggiungi la carta a quelle che hai in mano.",
		pt: "Você deve jogar 2 cartas Receptor Cruzado de uma vez (este efeito funciona uma vez para 2 cartas).\nColoque 1 Pokémon ou 1 carta de Apoiador da sua pilha de descarte na sua mão.",
		de: "Du musst 2 Cross-Transceiver-Karten gleichzeitig spielen. (Dieser Effekt funktioniert einmal für 2 Karten.)\nNimm 1 Pokémon oder 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "E",
	illustrator: "Studio Bora Inc.",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card