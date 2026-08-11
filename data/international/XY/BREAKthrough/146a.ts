import { Card } from "models/database/card"
import Set from "../BREAKthrough"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor's Letter",
		'fr-fr': "Lettre du Professeur",
		'es-es': "Carta del Profesor",
		'it-it': "Lettera del Prof",
		'pt-br': "Carta do Professor",
		'de-de': "Brief vom Prof."
	},

	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez jusqu'à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu baralho por até 2 cards de Energia básica, revele-os e coloque-os em sua mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286392
	}
}

export default card