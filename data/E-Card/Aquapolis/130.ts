import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pokémon Fan Club",
		fr: "Fan Club Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nCherchez dans votre deck jusqu'à deux cartes Bébé Pokémon et/ou Pokémon de base et placez-les sur votre Banc. Mélangez ensuite votre deck."
	}
}

export default card
