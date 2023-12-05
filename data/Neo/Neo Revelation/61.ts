import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Healing Field",
		fr: "Champ de guérison",
		de: "Healing Field*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade arrive en jeu.\n\nUne fois durant le tour de chaque joueur, celui-ci peut lancer une pièce. Si c'est face, ce joueur peut retirer 2 marqueurs de dégâts sur son Pokémon Actif (1 s'il n'en a qu'un seul).",
		de: "Once during each player's turn, he or she may flip a coin. If heads, that player removes 2 damage counters from his or her Active Pokémon (1 if it only has 1)."
	}
}

export default card
