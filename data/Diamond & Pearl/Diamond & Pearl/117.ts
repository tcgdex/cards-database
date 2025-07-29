import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

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
		fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277616
	}
}

export default card
