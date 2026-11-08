import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Here Comes Team Rocket!",
		'fr-fr': "Et voila les Team Rocket !",
		'de-de': "Hier kommt Team Rocket!"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Each player plays with his or her Prize cards face up for the rest of the game.",
		'fr-fr': "Chaque joueur joue avec ses cartes Récompenses découvertes jusqu'à la fin de la partie.",
		'de-de': "Each player plays with his or her Prize cards face up for the rest of the game."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274068,
				tcgplayer: 86074
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274068,
				tcgplayer: 86074
			}
		}
	]
}

export default card
