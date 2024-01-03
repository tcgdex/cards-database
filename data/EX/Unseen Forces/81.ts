import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

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
		fr: "Choisissez dans votre pile de défausse des cartes Énergie de base. Vous pouvez soit montrer 1 carte Énergie de base à votre adversaire et la placer dans votre main ou montrer 3 cartes Énergie de base à votre adversaire et les mélanger avec votre deck.",
		de: "Search your discard pile for basic Energy cards. You may either show 1 basic Energy card to your opponent and put it into your hand, or show 3 basic Energy cards to your opponent and shuffle them into your deck."
	}
}

export default card
