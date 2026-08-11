import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Samson Oak",
		'fr-fr': "Raphaël Chen",
		'es-es': "Gabriel Oak",
		'it-it': "Manuel Oak",
		'pt-br': "Gabriel Carvalho",
		'de-de': "Samson Eich"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 2 cartes. Si les deux Pokémon Actifs sont du même type, piochez 2 cartes supplémentaires.",
		'en-us': "Draw 2 cards. If both Active Pokémon are the same type, draw 2 more cards.",
		'es-es': "Roba 2 cartas. Si ambos Pokémon Activos son del mismo tipo, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se entrambi i Pokémon attivi sono dello stesso tipo, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se ambos os Pokémon Ativos forem do mesmo tipo, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn beide Aktiven Pokémon denselben Typ haben, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 372469,
		tcgplayer: 189294
	}
}

export default card
