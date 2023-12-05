import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Energy Recycle System",
		fr: "Recyclage d'énergie",
		de: "Energie Wiederverwertung"
	},

	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Cherchez dans votre deck des cartes Énergie de base. Vous pouvez soit montrer une carte Énergie de base à votre adversaire et la placer dans votre main, soit montrer trois cartes Énergie de base à votre adversaire et les mélanger à votre deck.",
		de: "Durchsuche deinen Ablagestapel nach Basis-Energiekarten. Wähle entweder 1 Basis Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand oder wähle 3 Basis Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
	}
}

export default card
