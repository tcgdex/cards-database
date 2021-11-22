import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pokémon Nurse",
		fr: "Infirmière Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nRetirez tous les marqueurs de dégâts d'un de vos Pokémon. Défaussez-vous ensuite de toutes les cartes Énergie qui lui sont attachées, s'il en possède."
	}
}

export default card
