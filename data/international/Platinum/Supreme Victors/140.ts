import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "VS Seeker",
		'fr-fr': "Cherche VS",
		'de-de': "Kampffahnder"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your discard pile for a Supporter card, show it to your opponent, and put it into your hand.",
		'fr-fr': "Choisissez une carte Supporter dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
		'de-de': "Durchsuche deinen Ablagestapel nach 1 Unterstützungskarte, zeige sie deinem Gegner und nimm sie auf die Hand."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90427,
				cardmarket: 278831
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278831,
				tcgplayer: 90427
			}
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				cardmarket: 868805,
				tcgplayer: 480127
			}
		}
	],

}

export default card
