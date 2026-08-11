import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Search Pro",
		'fr-fr': "Recherche d'Énergie Pro",
		'es-es': "Búsqueda de Energía Pro",
		'it-it': "Ricerca di Energia Pro",
		'pt-br': "Busca de Energia Profissional",
		'de-de': "Profi-Energiesuche"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for any number of Basic Energy cards of different types, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck le nombre voulu de cartes Énergie de base de types différents, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja cualquier cantidad de cartas de Energía Básica de diferentes tipos, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un numero qualsiasi di carte Energia base di tipo diverso, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por qualquer número de cartas de Energia Básica de tipos diferentes no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach beliebig vielen Basis-Energiekarten verschiedenen Typs, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794549,
				tcgplayer: 589933
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Toyste Beach",

}

export default card
