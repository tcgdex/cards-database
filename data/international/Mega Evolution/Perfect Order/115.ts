import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sacred Ash",
		'fr-fr': "Cendre Sacrée",
		'es-es': "Ceniza Sagrada",
		'es-mx': "Ceniza Sagrada",
		'de-de': "Zauberasche",
		'it-it': "Cenere magica",
		'pt-br': "Cinza Sagrada"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 5 Pokémon from your discard pile into your deck.",
		'fr-fr': "Mélangez avec votre deck jusqu'à 5 Pokémon de votre pile de défausse.",
		'es-es': "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
		'es-mx': "Baraja hasta 5 Pokémon de tu pila de descartes en tu mazo.",
		'de-de': "Mische bis zu 5 Pokémon aus deinem Ablagestapel in dein Deck.",
		'it-it': "Rimischia fino a cinque Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe até 5 Pokémon da sua pilha de descarte no seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684326,
				cardmarket: 877532
			}
		}
	],

}

export default card
