import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Felicity's Drawing",
		'fr-fr': "Le dessin de Felicity",
		'de-de': "Beates Ziehung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard up to 2 cards from your hand. If you discard 1 card, draw 3 cards. If you discard 2 cards, draw 4 cards.",
		'fr-fr': "Défaussez jusqu'à 2 cartes de votre main. Si vous défaussez 1 carte, piochez 3 cartes. Si vous défaussez 2 cartes, piochez 4 cartes.",
		'de-de': "Lege bis zu 2 Karten von deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise 1 Karte auf deinen Ablagestapel gelegt hast, ziehe 3 Karten. Wenn du auf diese Weise 2 Karte auf deinen Ablagestapel gelegt hast, ziehe 4 Karten.",
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
