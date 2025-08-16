import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d'énergie",
		de: "Energiesuche"
	},

	illustrator: "Kai Ishikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach einer Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 275028,
		tcgplayer: 85238
	}
}

export default card
