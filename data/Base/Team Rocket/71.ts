import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Here Comes Team Rocket!",
		fr: "Et voila les Team Rocket !",
		de: "Hier kommt Team Rocket!"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur joue avec ses cartes Récompenses découvertes jusqu'à la fin de la partie.",
		de: "Each player plays with his or her Prize cards face up for the rest of the game."
	},

	thirdParty: {
		cardmarket: 274068,
		tcgplayer: 86074
	}
}

export default card
