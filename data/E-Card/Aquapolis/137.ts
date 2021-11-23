import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Traveling Salesman",
		fr: "Représentant de commerce"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nCherchez dans votre deck jusqu'à 2 cartes Machine technique ou Outil Pokémon, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck."
	}
}

export default card
