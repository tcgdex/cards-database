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
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Lege bis zu 2 Karten von deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise 1 Karte auf deinen Ablagestapel gelegt hast, ziehe 3 Karten. Wenn du auf diese Weise 2 Karte auf deinen Ablagestapel gelegt hast, ziehe 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278000,
		tcgplayer: 85408
	}
}

export default card
