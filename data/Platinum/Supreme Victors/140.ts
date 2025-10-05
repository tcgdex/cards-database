import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
		de: "Kampffahnder"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une carte Supporter dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
		de: "Durchsuche deinen Ablagestapel nach 1 Unterstützungskarte, zeige sie deinem Gegner und nimm sie auf die Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278831
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		}
	]
}

export default card
