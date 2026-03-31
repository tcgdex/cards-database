import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Wondrous Patch",
		fr: "Fortifiant Merveilleux",
		es: "Refuerzo Prodigioso",
		de: "Wunderpflaster",
		it: "Distintivo Meraviglioso",
		pt: "Fragmento Encantado"
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",
	illustrator: "Studio Bora Inc.",
	effect: {
		en: "Attach a Basic [P] Energy card from your discard pile to 1 of your Benched [P] Pokémon.",
		fr: "Attachez une carte Énergie [P] de base de votre pile de défausse à l'un de vos Pokémon [P] de Banc.",
		es: "Une 1 carta de Energía [P] Básica de tu pila de descartes a uno de tus Pokémon [P] en Banca.",
		de: "Lege 1 Basis-[P]-Energiekarte aus deinem Ablagestapel an 1 [P]-Pokémon auf deiner Bank an.",
		it: "Assegna a uno dei Pokémon [P] nella tua panchina una carta Energia base [P] dalla tua pila degli scarti.",
		pt: "Ligue uma carta de Energia [P] Básica da sua pilha de descarte a 1 dos seus Pokémon [P] no Banco."
	},
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684331,
		cardmarket: 877534
	}
}

export default card
