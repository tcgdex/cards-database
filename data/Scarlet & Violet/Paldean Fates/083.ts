import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Nemona's Backpack",
		fr: "Sac de Menzi",
		es: "Mochila de Mencía",
		it: "Zaino di Nemi",
		pt: "Mochila da Noêmia",
		de: "Nemilas Rucksack"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Put up to 2 Nemona cards from your discard pile into your hand.",
		fr: "Ajoutez jusqu'à 2 cartes Menzi de votre pile de défausse à votre main.",
		es: "Pon hasta 2 cartas de Mencía de tu pila de descartes en tu mano.",
		it: "Prendi fino a due carte Nemi dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		pt: "Coloque até 2 cartas Noêmia da sua pilha de descarte na sua mão.",
		de: "Nimm bis zu 2 Nemila-Karten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card