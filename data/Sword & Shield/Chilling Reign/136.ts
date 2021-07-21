import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Corne Résonnante",
		en: "Echoing Horn",
		es: "Cuerno Resonante",
		it: "Corno Echeggiante",
		pt: "Berrante Retumbante",
		de: "Echohorn"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Placez un Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
		en: "Put a Basic Pokémon from your opponent’s discard pile onto their Bench.",
		es: "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
		it: "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
		pt: "Coloque 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a).",
		de: "Lege 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank."
	},

	trainerType: "Item",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card