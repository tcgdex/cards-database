import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Ordinary Rod",
		fr: "Canne Ordinaire",
		es: "Caña Normal",
		it: "Amo Normale",
		pt: "Vara de Pescar Comum",
		de: "Gewöhnliche Angel"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 or both:\n\n• Shuffle up to 2 Pokémon from your discard pile into your deck.\n\n• Shuffle up to 2 basic Energy cards from your discard pile into your deck.",
		fr: "Choisissez l'une de ces options ou les deux :\n\n• Mélangez avec votre deck jusqu'à 2 Pokémon de votre pile de défausse.\n\n• Mélangez avec votre deck jusqu'à 2 cartes Énergie de base de votre pile de défausse.",
		es: "Elige 1 o ambas opciones:\n\n• Pon hasta 2 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.\n• Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Scegli uno o entrambi gli effetti:\n\n• Rimischia fino a due Pokémon dalla tua pila degli scarti nel tuo mazzo.\n\n• Rimischia fino a due carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Escolha 1 ou ambas:\n\n• Embaralhe até 2 Pokémon da sua pilha de descarte no seu baralho.\n\n• Embaralhe até 2 cartas de Energia básica da sua pilha de descarte no seu baralho.",
		de: "Wähle 1 oder beide aus:\n\n• Mische bis zu 2 Pokémon aus deinem Ablagestapel in dein Deck.\n\n• Mische bis zu 2 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436949
	}
}

export default card
