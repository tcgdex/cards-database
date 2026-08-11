import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Cherish Ball",
		'fr-fr': "Mémoire Ball",
		'es-es': "Gloria Ball",
		'it-it': "Pregio Ball",
		'pt-br': "Bola Estima",
		'de-de': "Jubelball"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Search your deck for a Pokémon-GX, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez un Pokémon-GX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon-GX, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon-GX, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 Pokémon-GX no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon-GX, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	thirdParty: {
		cardmarket: 389042,
		tcgplayer: 195314
	}
}

export default card
