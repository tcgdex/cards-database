import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie",
		de: "Energiewiederherstellung"
	},

	illustrator: "Hideyuki Nakajima",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez trois pièces. Chaque fois que c'est face, prenez une carte Énergie de base dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main. Si vous n'avez pas suffisamment de cartes Énergie dans votre pile de défausse, placez toutes vos cartes Énergie dans votre main.",
		de: "Wirf 3 Münzen. Nimme für jedes Mal, wenn die Münze 'Kopf' gezeigt hat, eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand. Falls du nicht genug Basis-Energiekarten in deinem Ablagestapel hast, nimm so viele wie möglich auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277605
	}
}

export default card
