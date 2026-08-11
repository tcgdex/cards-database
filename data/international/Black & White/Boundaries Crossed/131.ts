import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Poké Ball",
		'fr-fr': "Poké Ball",
		'es-es': "Poké Ball",
		'it-it': "Poké Ball",
		'pt-br': "Poké Ball",
		'de-de': "Pokéball"
	},

	illustrator: "Yuri Umemura",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'en-us': "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Lanza una moneda. Si sale cara, busca en tu baraja un Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Jogue uma moeda. Se sair cara, procure um Pokémon no seu deck, mostre-o e coloque-o na sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280718
	}
}

export default card
