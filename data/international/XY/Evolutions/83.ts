import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'es-es': "Poción",
		'it-it': "Pozione",
		'pt-br': "Poção",
		'de-de': "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 30 dégâts à l'un de vos Pokémon.",
		'en-us': "Heal 30 damage from 1 of your Pokémon.",
		'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
		'pt-br': "Cure 30 de danos de 1 dos seus Pokémon.",
		'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 293445,
		tcgplayer: 124096
	}
}

export default card
