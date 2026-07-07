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
		en: "Each player plays with his or her Prize cards face up for the rest of the game.",
		fr: "Chaque joueur joue avec ses cartes Récompenses découvertes jusqu'à la fin de la partie.",
	},

	trainerType: "Supporter",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576776,
				tcgplayer: 250323
			}
		},
	],
}

export default card
