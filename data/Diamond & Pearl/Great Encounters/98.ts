import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Felicity's Drawing",
		fr: "Le dessin de Felicity",
		de: "Beates Ziehung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez jusqu'à 2 cartes de votre main. Si vous défaussez 1 carte, piochez 3 cartes. Si vous défaussez 2 cartes, piochez 4 cartes.",
		de: "Lege bis zu 2 Karten von deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise 1 Karte auf deinen Ablagestapel gelegt hast, ziehe 3 Karten. Wenn du auf diese Weise 2 Karte auf deinen Ablagestapel gelegt hast, ziehe 4 Karten.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278000,
		tcgplayer: 85408
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "league"
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
