import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Turbo Patch",
		fr: "Fortifiant Turbo",
		es: "Refuerzo Turbo",
		it: "Distintivo Turbo",
		pt: "Fragmento Turbo",
		de: "Turbopflaster"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Basic Pokémon that isn't a Pokémon-GX.",
		fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de base qui n'est pas un Pokémon-GX.",
		es: "Lanza 1 moneda. Si sale cara, une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon Básicos que no sea 1 Pokémon-GX.",
		it: "Lancia una moneta. Se esce testa, assegna a uno dei tuoi Pokémon Base che non è un Pokémon-GX una carta Energia base dalla tua pila degli scarti.",
		pt: "Jogue 1 moeda. Se sair cara, ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon Básicos que não seja um Pokémon-GX.",
		de: "Wirf 1 Münze. Lege bei Kopf 1 Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Basis-Pokémon an, das kein Pokémon-GX ist."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 483739,
		tcgplayer: 219289
	}
}

export default card
