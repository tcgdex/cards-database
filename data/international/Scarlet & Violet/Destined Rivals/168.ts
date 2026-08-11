import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sacred Ash",
		'fr-fr': "Cendre Sacrée",
		'de-de': "Zauberasche",
		'it-it': "Cenere magica",
		'es-es': "Ceniza Sagrada",
		'pt-br': "Cinza Sagrada",
		'es-mx': "Ceniza Sagrada"
	},


	illustrator: "Eske Yoshinob",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 5 Pokémon from your discard pile into your deck.",
		'fr-fr': "Mélangez avec votre deck jusqu'à 5 Pokémon de votre pile de défausse.",
		'de-de': "Mische bis zu 5 Pokémon aus deinem Ablagestapel in dein Deck.",
		'it-it': "Rimischia fino a cinque Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		'es-es': "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
		'pt-br': "Embaralhe até 5 Pokémon da sua pilha de descarte no seu baralho.",
		'es-mx': "Pon hasta 5 Pokémon de tu pila de descartes en tu mazo y baraja todas las cartas."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826042,
				tcgplayer: 632970
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826042,
				tcgplayer: 632970
			}
		},
	],
}

export default card
