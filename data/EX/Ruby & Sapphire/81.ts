import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie"
	},

	illustrator: "Hideyuki Nakajima",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez trois pièces. Chaque fois que c'est face, prenez une carte Énergie de base de votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main. Si vous n'avez pas suffisamment de cartes Énergie dans votre pile de défausse, placez toutes vos cartes Énergie dans votre main."
	}
}

export default card
