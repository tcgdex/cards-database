import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Here Comes Team Rocket!",
		'fr-fr': "Et voila les Team Rocket !",
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Trainer",
	effect: {
		'en-us': "Each player plays with his or her Prize cards face up for the rest of the game.",
		'fr-fr': "Chaque joueur joue avec ses cartes Récompenses découvertes jusqu'à la fin de la partie.",
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
