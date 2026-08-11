import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Signal",
		'fr-fr': "Méga Signal",
		'es-es': "Megaseñal",
		'es-mx': "Megaseñal",
		'de-de': "Mega-Signal",
		'it-it': "Megasegnale",
		'pt-br': "Megassinal"
	},

	illustrator: "inose yukie",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Mega Evolution Pokémon ex, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon-ex Méga-Évolution, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon ex Megaevolución, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'es-mx': "Busca en tu mazo 1 Pokémon ex Megaevolución, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
		'de-de': "Durchsuche dein Deck nach 1 Mega-Entwicklungs-Pokémon-ex, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo un Pokémon-ex Megaevoluzione, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
		'pt-br': "Procure por um Pokémon ex de Megaevolução no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869804,
			tcgplayer: 676005
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869804,
			tcgplayer: 676005
		}
	},
],
}

export default card