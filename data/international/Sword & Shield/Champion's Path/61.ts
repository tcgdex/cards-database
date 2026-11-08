import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'es-es': "Poción",
		'it-it': "Pozione",
		'pt-br': "Poção",
		'de-de': "Trank"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Heal 30 damage from 1 of your Pokémon.",
		'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
		'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
		'pt-br': "Cura 30 de danos de 1 Pokémon seu.",
		'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500160,
		tcgplayer: 223061
	}
}

export default card
