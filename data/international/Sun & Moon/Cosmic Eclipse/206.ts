import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Tag Call",
		'fr-fr': "Appel aux Escouades",
		'es-es': "Convocador de Relevos",
		'it-it': "Richiamo Alleati",
		'pt-br': "Apito de Aliados",
		'de-de': "Team-Ruf"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu’à 2 cartes ESCOUADE dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 2 TAG TEAM cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas de equipo de RELEVOS, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due carte ALLEATI, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 cartas ALIADOS no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 {TAG TEAM} Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 408624,
		tcgplayer: 201326
	}
}

export default card
