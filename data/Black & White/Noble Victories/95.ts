import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Super Rod",
		fr: "Méga Canne",
		es: "Supercaña",
		it: "Super Amo",
		pt: "Super Bastão",
		de: "Superangel"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une combinaison de 3 cartes de Pokémon et d’Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		en: "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile back into your deck.",
		es: "Pon, en cualquier combinación, 3 cartas de Pokémon y de Energía Básica de tu pila de descartes de nuevo en tu baraja y barájalas todas.",
		it: "Rimischia tre carte Pokémon e Energia base, in qualsiasi combinazione, dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe qualquer combinação de 3 cards entre Pokémon e Energia básica de sua pilha de descarte em seu baralho.",
		de: "Mische eine Kombination aus insgesamt 3 Pokémon- und Basis-Energiekarten von deinem Ablagestapel zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280218,
		tcgplayer: 89631
	}
}

export default card
