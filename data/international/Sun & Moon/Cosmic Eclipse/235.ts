import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Roller Skater",
		'fr-fr': "Roller Skateuse",
		'es-es': "Patinadora",
		'it-it': "Pattinatrice",
		'pt-br': "Patinadora",
		'de-de': "Rollerskaterin"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes. Si vous avez défaussé une carte Énergie de cette façon, piochez 2 cartes supplémentaires.",
		'en-us': "Discard a card from your hand. If you do, draw 2 cards. If you discarded an Energy card in this way, draw 2 more cards.",
		'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas. Si has descartado 1 carta de Energía de esta manera, roba 2 cartas más.",
		'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte. Se hai scartato una carta Energia in questo modo, pesca altre due carte.",
		'pt-br': "Descarte 1 carta da sua mão. Se fizer isto, compre 2 cartas. Se você descartou uma carta de Energia desta forma, compre 2 cartas a mais.",
		'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten. Wenn du auf diese Weise eine Energiekarte auf den Ablagestapel gelegt hast, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 408769,
		tcgplayer: 201347
	}
}

export default card
