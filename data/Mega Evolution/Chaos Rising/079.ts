import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Philippe",
		fr: "Gypso",
		es: "Giso",
		'es-mx': "Albado",
		de: "Gipson",
		it: "Gypso",
		pt: "Philippe"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693532,
		cardmarket: 886471
	},

	effect: {
		en: "Attach up to 2 Basic {M} Energy cards from your discard pile to 1 of your {M} Pokémon.",
		fr: "Attachez jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à l'un de vos Pokémon {M}.",
		es: "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a uno de tus Pokémon {M}.",
		'es-mx': "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a 1 de tus Pokémon {M}.",
		de: "Lege bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel an 1 deiner {M}-Pokémon an.",
		it: "Assegna a uno dei tuoi Pokémon {M} fino a due carte Energia base {M} dalla tua pila degli scarti.",
		pt: "Ligue até 2 cartas de Energia {M} Básica da sua pilha de descarte a 1 dos seus Pokémon {M}."
	}
}

export default card