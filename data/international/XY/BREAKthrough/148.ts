import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Skyla",
		'fr-fr': "Carolina",
		'es-es': "Gerania",
		'it-it': "Anemone",
		'pt-br': "Skyla",
		'de-de': "Géraldine"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Trainer card, reveal it, and put it into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure um card de Treinador em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 286394,
		tcgplayer: 107266
	}
}

export default card
