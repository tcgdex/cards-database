import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

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
	trainerType: "Item",

	effect: {
		fr: "Lancez trois pièces. Chaque fois que c'est face, prenez une carte Énergie de base de votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main. Si vous n'avez pas suffisamment de cartes Énergie dans votre pile de défausse, placez toutes vos cartes Énergie dans votre main.",
		de: "Flip 3 coins. For each heads, put a basic Energy card from your discard pile into your hand. If you don't have that many basic Energy cards in your discard pile, put all of them into your hand."
	},

	thirdParty: {
		cardmarket: 275729,
		tcgplayer: 85225
	}
}

export default card
