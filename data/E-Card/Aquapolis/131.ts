import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pokémon Park",
		fr: "Parc Pokémon"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne seule fois pendant chacun de ses tours, à chaque fois qu'un joueur attache une carte Énergie de sa main à l'un des Pokémon de son Banc, il retire un marqueur de dégâts de ce Pokémon, s'il en a."
	}
}

export default card
