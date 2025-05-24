import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Stickers Énergie",
		en: "Energy Sticker",
		es: "Pegatinas de Energía",
		it: "Adesivo Energia",
		pt: "Adesivo de Energia",
		de: "Energiesticker"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		en: "Flip a coin. If heads, attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon.",
		es: "Lanza 1 moneda. Si sale cara, une 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
		it: "Lancia una moneta. Se esce testa, assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
		pt: "Jogue uma moeda. Se sair cara, ligue uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
		de: "Wirf 1 Münze. Lege bei Kopf 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Ayaka Yoshida"
}

export default card