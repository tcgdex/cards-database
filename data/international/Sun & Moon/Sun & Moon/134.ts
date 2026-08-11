import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Timer Ball",
		'fr-fr': "Chrono Ball",
		'es-es': "Turno Ball",
		'it-it': "Timer Ball",
		'pt-br': "Bola Tempo",
		'de-de': "Timerball"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon Évolutif dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Flip 2 coins. For each heads, search your deck for an Evolution Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'es-es': "Lanza 2 monedas. Por cada cara, busca en tu baraja 1 Pokémon Evolución, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, cerca nel tuo mazzo un Pokémon Evoluzione, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Jogue 2 moedas. Para cada cara, procure por 1 Pokémon de Evolução no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Wirf 2 Münzen. Durchsuche pro Kopf dein Deck nach 1 Entwicklungs-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295447,
		tcgplayer: 127006
	}
}

export default card
