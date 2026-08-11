import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Firebreather",
		'fr-fr': "Crache-Feu",
		'es-es': "Comefuego",
		'es-mx': "Tragafuegos",
		'de-de': "Feuerspucker",
		'it-it': "Mangiafuoco",
		'pt-br': "Cuspidor de Fogo"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 7 Basic {R} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 7 cartes Énergie {R} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 7 cartas de Energía {R} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'es-mx': "Busca en tu mazo hasta 7 cartas de Energía {R} Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
		'de-de': "Durchsuche dein Deck nach bis zu 7 Basis-{R}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo fino a sette carte Energia base {R}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
		'pt-br': "Procure por até 7 cartas de Energia {R} Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	illustrator: "Naoki Saito",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857694,
				tcgplayer: 662158,
				cardtrader: 356905
			}
		},
	],
}

export default card
