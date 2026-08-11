import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Dive Ball",
		'fr-fr': "Scuba Ball",
		'es-es': "Buceo Ball",
		'it-it': "Sub Ball",
		'pt-br': "Bola Mergulho",
		'de-de': "Tauchball"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon Water, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Water, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure um Pokémon Water em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Water-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	thirdParty: {
		cardmarket: 273656,
		tcgplayer: 96059
	}
}

export default card
