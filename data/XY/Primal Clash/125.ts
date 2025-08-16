import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Dive Ball",
		fr: "Scuba Ball",
		es: "Buceo Ball",
		it: "Sub Ball",
		pt: "Bola Mergulho",
		de: "Tauchball"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		es: "Busca en tu baraja 1 Pokémon Water, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
		it: "Cerca nel tuo mazzo un Pokémon Water, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure um Pokémon Water em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		de: "Durchsuche dein Deck nach 1 Water-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 273656,
		tcgplayer: 96023
	}
}

export default card
