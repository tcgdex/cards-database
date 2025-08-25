import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Super Energy Removal 2",
		fr: "Super suppression d'énergie 2",
		de: "Super Energy Removal 2*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 2 pièces. Si vous obtenez 2 faces, défaussez-vous de toutes les cartes Énergie attachées au Pokémon Défenseur. Si vous obtenez 2 piles, défaussez-vous de toutes les cartes Énergie attachées à votre Pokémon Actif. Si l'une est face et l'autre est pile, cette carte ne fait rien.",
		de: "Flip 2 coins. If both are heads, discard all Energy cards attached to the Defending Pokémon. If both are tails, discard all Energy cards attached to your Active Pokémon. If 1 is heads and 1 is tails, this card does nothing."
	},

	thirdParty: {
		cardmarket: 275210,
		tcgplayer: 89627
	}
}

export default card
