import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Juggler",
		fr: "Jongleur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nDéfaussez-vous de jusqu'à 2 cartes Énergies de base de votre main. Si vous vous êtes défaussé d'une carte Énergie de base, piochez 3 cartes. Si vous vous êtes défaussé de 2 cartes Énergie de base, piochez 5 cartes."
	}
}

export default card
