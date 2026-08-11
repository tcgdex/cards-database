import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rocket's Admin.",
		'fr-fr': "Admin Rocket"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Trainer",

	effect: {
		'en-us': "Each player shuffles his or her hand into his or her deck. Then, each player counts his or her Prize cards left and draws up to that many cards. (You draw your cards first.)",
		'fr-fr': "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur compte ses cartes Récompenses restantes et pioche au maximum ce même nombre de cartes. (Vous piochez vos cartes en premier.)",
	},

	trainerType: "Supporter",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576782,
				tcgplayer: 250329
			}
		},
	],
}

export default card
