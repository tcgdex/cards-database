import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Research Tower",
		fr: "Tour de recherche Holon",
		de: "Holon-Forschungsturm"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes cartes Énergie de base attachées aux Pokémon de chaque joueur possédant le symbole δ fournissent leur Énergie habituelle ainsi qu'une Énergie . Elles ne fournissent qu' 1 Énergie à la fois. (Elles n'ont pas d'autre effet que de fournir de l'Énergie.)",
		de: "Each player's basic Energy cards attached to Pokémon that has Delta on its card are both their usual Energy type and  type but provide only 1 Energy at a time. (Has no effect other than providing Energy.)"
	},

	thirdParty: {
		cardmarket: 276857,
		tcgplayer: 86149
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

