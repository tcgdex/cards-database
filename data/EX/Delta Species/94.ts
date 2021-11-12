import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Research Tower",
		fr: "Tour de recherche Holon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes cartes Énergie de base attachées aux Pokémon de chaque joueur possédant le symbole δ fournissent leur Énergie habituelle ainsi qu'une Énergie . Elles ne fournissent qu' 1 Énergie à la fois. (Elles n'ont pas d'autre effet que de fournir de l'Énergie.)"
	}
}

export default card
