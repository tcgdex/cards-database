import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Echoing Horn",
		fr: "Corne Résonnante",
		es: "Cuerno Resonante",
		it: "Corno Echeggiante",
		pt: "Berrante Retumbante",
		de: "Echohorn"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Put a Basic Pokémon from your opponent's discard pile onto their Bench.",
		fr: "Placez un Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
		es: "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
		it: "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
		pt: "Coloque 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a).",
		de: "Lege 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank."
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 567243,
		tcgplayer: 241829
	}
}

export default card
