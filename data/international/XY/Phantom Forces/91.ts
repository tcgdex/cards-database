import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "AZ",
		'fr-fr': "A.Z.",
		'es-es': "A. Z.",
		'it-it': "AZ",
		'pt-br': "AZ",
		'de-de': "Azett"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez l'un de vos Pokémon dans votre main. (Défaussez toutes les cartes attachées au Pokémon.)",
		'en-us': "Put 1 of your Pokémon into your hand. (Discard all cards attached to that Pokémon.)",
		'es-es': "Pon 1 de tus Pokémon en juego en tu mano. (Descarta todas las cartas unidas a ese Pokémon).",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon, ma scarta tutte le carte assegnategli.",
		'pt-br': "Coloque 1 dos seus Pokémon na sua mão. (Descarte todos os cards ligados a esse Pokémon.)",
		'de-de': "Nimm 1 deiner Pokémon im Spiel auf deine Hand. (Lege alle an dieses Pokémon angelegten Karten auf deinen Ablagestapel.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281897,
		tcgplayer: 94659
	}
}

export default card
