import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d'énergie",
		de: "Energiesuche"
	},

	illustrator: "Kai Ishikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		de: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276740,
		tcgplayer: 85241
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
