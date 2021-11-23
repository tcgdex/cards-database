import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Apricorn Forest",
		fr: "Forêt de noigrumes"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne seule fois pendant le tour de chaque joueur (avant son attaque), si le Banc de ce joueur n'est pas plein, ce joueur lance une pièce. Si c'est face, ce joueur montre à son adversaire une carte Énergie de base de sa main. Ce joueur cherche ensuite dans son deck une Carte Pokémon de base du même type (la même couleur) que la carte Énergie révélée et la place sur son Banc. Enfin, ce joueur mélange son deck."
	}
}

export default card
