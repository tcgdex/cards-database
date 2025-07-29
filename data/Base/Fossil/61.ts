import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Recycle",
		fr: "Recyclage",
		de: "Wiederverwertung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, déplacez une carte de votre pile de défausse vers le sommet de votre deck.",
		de: "Wirf eine Münze. Bei 'Kopf' suche eine Karte aus deinem Ablagestapel und lege sie oben auf dein Deck."
	},

	thirdParty: {
		cardmarket: 273922
	}
}

export default card
