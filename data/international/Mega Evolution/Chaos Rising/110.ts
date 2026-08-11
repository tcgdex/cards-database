import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Philippe",
		'fr-fr': "Gypso",
		'es-es': "Giso",
		'es-mx': "Albado",
		'de-de': "Gipson",
		'it-it': "Gypso",
		'pt-br': "Philippe"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		'en-us': "Attach up to 2 Basic {M} Energy cards from your discard pile to 1 of your {M} Pokémon.",
		'fr-fr': "Attachez jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à l'un de vos Pokémon {M}.",
		'es-es': "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a uno de tus Pokémon {M}.",
		'es-mx': "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a 1 de tus Pokémon {M}.",
		'de-de': "Lege bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel an 1 deiner {M}-Pokémon an.",
		'it-it': "Assegna a uno dei tuoi Pokémon {M} fino a due carte Energia base {M} dalla tua pila degli scarti.",
		'pt-br': "Ligue até 2 cartas de Energia {M} Básica da sua pilha de descarte a 1 dos seus Pokémon {M}."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886502,
				tcgplayer: 693533
			}
		},
	],
}

export default card
