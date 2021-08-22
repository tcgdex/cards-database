import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Melony",
		fr: "Lona",
		es: "Mel",
		it: "Melania",
		pt: "Melony",
		de: "Mel"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Attach a Water Energy card from your discard pile to 1 of your Pokémon V. If you do, draw 3 cards.",
		fr: "Attachez une carte Énergie Water de votre pile de défausse à l’un de vos Pokémon-V. Dans ce cas, piochez 3 cartes.",
		es: "Une 1 carta de Energía Water de tu pila de descartes a 1 de tus Pokémon V. Si lo haces, roba 3 cartas.",
		it: "Assegna una carta Energia Water dalla tua pila degli scarti a uno dei tuoi Pokémon-V. Se lo fai, pesca tre carte.",
		pt: "Ligue 1 carta de Energia Water da sua pilha de descarte a 1 dos seus Pokémon V. Se fizer isto, compre 3 cartas.",
		de: "Lege 1 Water-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon-V an. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Taira Akitsu"
}

export default card