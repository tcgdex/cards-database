import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Evolution Incense",
		'fr-fr': "Encens d'Évolution",
		'es-es': "Incienso Evolución",
		'it-it': "Evoaroma",
		'pt-br': "Incenso de Evolução",
		'de-de': "Entwicklungsrauch"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for an Evolution Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon Évolutif, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon Evolución, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Evoluzione, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 Pokémon de Evolução no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Entwicklungs-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436909,
		tcgplayer: 208489
	}
}

export default card
