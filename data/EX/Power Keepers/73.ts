import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Energy Recycle System",
		fr: "Recyclage d'énergie",
		de: "Energie-Wiederverwertung"
	},

	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Choisissez dans votre pile de défausse des cartes Énergie de base. Vous pouvez soit montrer 1 carte Énergie de base à votre adversaire et la placer dans votre main ou montrer 3 cartes Énergie de base à votre adversaire et les mélanger à votre deck.",
		de: "Durchsuche deinen Ablagestapel nach Basis-Energiekarten. Wähle entweder 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand oder wähle 3 Basis-Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
	},

	thirdParty: {
		cardmarket: 277379,
		tcgplayer: 85218
	}
}

export default card
