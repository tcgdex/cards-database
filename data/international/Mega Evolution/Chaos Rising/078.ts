import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Great Haul Net",
		'fr-fr': "Filet Grande Prise",
		'es-es': "Gran Salabre",
		'es-mx': "Red de Pesca Abundante",
		'de-de': "Großes Fangnetz",
		'it-it': "Rete Pesca Grossa",
		'pt-br': "Rede Grande de Arrasto"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		'en-us': "Choose 1 or both:\n• Shuffle up to 3 {W} Pokémon from your discard pile into your deck.\n• Shuffle up to 3 Basic {W} Energy cards from your discard pile into your deck.",
		'fr-fr': "Choisissez l'une de ces options ou les deux :\n• Mélangez jusqu'à 3 Pokémon {W} de votre pile de défausse avec votre deck.\n•\nMélangez jusqu'à 3 cartes Énergie {W} de base de votre pile de défausse avec votre deck.",
		'es-es': "Elige una o ambas opciones:\n• Pon hasta 3 Pokémon {W} de tu pila de descartes en tu baraja y baraja todas las cartas.\n• Pon hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu baraja y baraja todas las cartas.",
		'es-mx': "Elige 1 o ambas opciones:\n• Baraja hasta 3 Pokémon {W} de tu pila de descartes en tu mazo.\n• Baraja hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu mazo.",
		'de-de': "Wähle 1 oder beide aus:\n• Mische bis zu 3 {W}-Pokémon aus deinem Ablagestapel in dein Deck.\n• Mische bis zu 3 Basis-{W}-Energiekarten aus deinem Ablagestapel in dein Deck.",
		'it-it': "Scegli uno o entrambi gli effetti:\n• Rimischia fino a tre Pokémon {W} dalla tua pila degli scarti nel tuo mazzo.\n• Rimischia fino a tre carte Energia base {W} dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Escolha 1 ou ambas:\n• Embaralhe até 3 Pokémon {W} da sua pilha de descarte no seu baralho.\n• Embaralhe até 3 cartas de Energia {W} Básica da sua pilha de descarte no seu baralho."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886469,
				tcgplayer: 693499
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886469,
				tcgplayer: 693499
			}
		},
	],
}

export default card
