import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Petrel",
		'fr-fr': "Lambda de la Team Rocket",
		'de-de': "Team Rockets Lambda",
		'it-it': "Maxus del Team Rocket",
		'es-es': "Petrel del Team Rocket",
		'pt-br': "Petrel da Equipe Rocket",
		'es-mx': "Petrel del Equipo Rocket"
	},


	illustrator: "GOSSAN",

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'de-de': "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'es-es': "Busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		'pt-br': "Procure por uma carta de Treinador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo 1 carta de Entrenador, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826100,
				tcgplayer: 633026
			}
		},
	],
}

export default card
