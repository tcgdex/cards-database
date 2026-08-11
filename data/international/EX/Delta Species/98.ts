import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Holon Transceiver",
		'fr-fr': "Émetteur-récepteur Holon",
		'de-de': "Holon-Funkgerät"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		'en-us': "Search your deck for a Supporter card that has Holon in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. Or, search your discard pile for a Supporter card that has Holon in its name, show it to your opponent, and put it into your hand.",
		'fr-fr': "Cherchez dans votre deck une carte Supporter dont le nom comporte Holon, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Ou, cherchez dans votre pile de défausse une carte Supporter dont le nom comporte Holon, montrez-la à votre adversaire et placez-la dans votre main.",
		'de-de': "Search your deck for a Supporter card that has Holon in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. Or, search your discard pile for a Supporter card that has Holon in its name, show it to your opponent, and put it into your hand."
	},

	thirdParty: {
		cardmarket: 276861,
		tcgplayer: 86153
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["miska-saari"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
	]
}

export default card
