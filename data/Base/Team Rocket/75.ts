import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Digger",
		fr: "Excavatrice"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est pile, infligez 10 dégâts à votre Pokémon Actif. Si c'est face, votre adversaire lance une pièce. Si c'est pile, votre adversaire inflige 10 dégâts à son Pokémon Actif. Si c'est face, vous lancez une pièce. Continuez ainsi jusqu'à ce que l'un des joueurs obtienne pile."
	}
}

export default card
