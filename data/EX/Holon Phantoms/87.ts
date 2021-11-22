import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Holon Lake",
		fr: "Lac Holon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes Pokémon de chaque joueur possédant le symbole δ peuvent utiliser les attaques de cette carte à la place des leurs.\n\tAppel Delta\t\nCherchez dans votre deck un Pokémon possédant le symbole δ, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck."
	}
}

export default card
