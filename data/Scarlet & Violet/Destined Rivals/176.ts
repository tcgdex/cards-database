import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Petrel",
		fr: "Lambda de la Team Rocket",
		de: "Team Rockets Lambda",
		it: "Maxus del Team Rocket",
		es: "Petrel del Team Rocket",
		pt: "Petrel da Equipe Rocket",
		'es-mx': "Petrel del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		it: "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		es: "Busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		pt: "Procure por uma carta de Treinador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo 1 carta de Entrenador, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
