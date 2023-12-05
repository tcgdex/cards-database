import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Transceiver",
		fr: "Émetteur-récepteur Holon",
		de: "Holon-Funkgerät"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Cherchez dans votre deck une carte Supporter dont le nom comporte Holon, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Ou, cherchez dans votre pile de défausse une carte Supporter dont le nom comporte Holon, montrez-la à votre adversaire et placez-la dans votre main.",
		de: "Search your deck for a Supporter card that has Holon in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. Or, search your discard pile for a Supporter card that has Holon in its name, show it to your opponent, and put it into your hand."
	}
}

export default card
