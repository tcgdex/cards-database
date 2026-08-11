import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poké Ball",
		'fr-fr': "Poké Ball",
		'es-es': "Poké Ball",
		'es-mx': "Pokébola",
		'de-de': "Pokéball",
		'it-it': "Poké Ball",
		'pt-br': "Poké Bola"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'es-mx': "Lanza 1 moneda. Si sale cara, busca en tu mazo 1 Pokémon, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
		'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
		'pt-br': "Jogue uma moeda. Se sair cara, procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Item",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684321,
				cardmarket: 877497
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684321,
				cardmarket: 877497
			}
		}
	],

}

export default card
