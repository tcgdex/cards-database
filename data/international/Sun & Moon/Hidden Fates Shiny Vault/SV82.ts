import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Cynthia",
		'fr-fr': "Cynthia",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Shiny rare",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 6 cards. You may play only 1 Supporter card during your turn (before your attack).",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
	},
	trainerType: "Supporter",

}

export default card
