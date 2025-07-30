import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Skyla",
		fr: "Carolina",
		es: "Gerania",
		it: "Anemone",
		pt: "Skyla",
		de: "Géraldine"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja una carta de Entrenador, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
		it: "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure um card de Treinador em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
		de: "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 458218
	}
}

export default card
