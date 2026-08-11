import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "N",
		'fr-fr': "N",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Each player shuffles his or her hand into his or her deck. Then, each player draws a card for each of his or her remaining Prize cards. You may play only 1 Supporter card during your turn (before your attack).",
		'fr-fr': "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
	},
	trainerType: "Supporter",

}

export default card
