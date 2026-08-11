import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'es-es': "Poción",
		'it-it': "Pozione",
		'pt-br': "Poção",
		'de-de': "Trank"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Heal 30 damage from 1 of your Pokémon.",
		'fr-fr': "Soignez 30 dégâts à l’un de vos Pokémon.",
		'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
		'pt-br': "Cure 30 de danos de 1 dos seus Pokémon.",
		'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		tcgplayer: 98376
	}
}

export default card