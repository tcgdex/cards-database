import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Roark",
		fr: "Pierrick",
		es: "Roco",
		it: "Pedro",
		pt: "Roark",
		de: "Veit"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. Put a Basic Energy card from your discard pile into your hand.",
		fr: "Piochez 2 cartes. Ajoutez une carte Énergie de base de votre pile de défausse à votre main.",
		es: "Roba 2 cartas. Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.",
		it: "Pesca due carte. Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		pt: "Compre 2 cartas. Coloque uma carta de Energia Básica da sua pilha de descarte na sua mão.",
		de: "Ziehe 2 Karten. Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Ryuta Fuse"
}

export default card