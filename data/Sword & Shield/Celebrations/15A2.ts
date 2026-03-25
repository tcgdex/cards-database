import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Here Comes Team Rocket!",
		fr: "Et voila les Team Rocket !",
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Trainer",
	effect: {
		fr: "Chaque joueur joue avec ses cartes Récompenses découvertes jusqu'à la fin de la partie.",
	},

	trainerType: "Supporter",

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576776
	}
}

export default card
