import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Carolina",
		en: "Skyla",
		es: "Gerania",
		it: "Anemone",
		pt: "Skyla",
		de: "Géraldine"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		fr: "Cherchez dans votre deck une carte Dresseur, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
		es: "Busca en tu baraja una carta de Entrenador, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		it: "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure um card de Treinador em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		de: "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card