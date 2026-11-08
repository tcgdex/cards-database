import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Cilan",
		'fr-fr': "Rachid",
		'es-es': "Millo",
		'it-it': "Spighetto",
		'pt-br': "Cilan",
		'de-de': "Benny"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez 3 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for 3 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja 3 cartas de Energía Básica, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo tre carte Energia base, mostrale e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu baralho 3 cards de Energia básica, revele-os e coloque-os na sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280311,
		tcgplayer: 84316
	}
}

export default card
