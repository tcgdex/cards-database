import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Fairy Drop",
		'fr-fr': "Pastilles Féériques",
		'es-es': "Bolitas Hada",
		'it-it': "Goccia Fatata",
		'pt-br': "Bolinha de Fada",
		'de-de': "Feentropfen"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 50 dégâts à l'un de vos Pokémon auquel de l'Énergie Fairy est attachée.",
		'en-us': "Heal 50 damage from 1 of your Pokémon that has any Fairy Energy attached to it.",
		'es-es': "Cura 50 puntos de daño a 1 de tus Pokémon que tenga alguna Energía Fairy unida a él.",
		'it-it': "Cura da 50 danni uno dei tuoi Pokémon che abbia delle Energie Fairy assegnate.",
		'pt-br': "Cure 50 de danos de 1 dos seus Pokémon que possua qualquer Energia Fairy ligada a ele.",
		'de-de': "Heile 50 Schadenspunkte bei 1 deiner Pokémon, an das Fairy-Energie angelegt ist."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289919,
		tcgplayer: 117871
	}
}

export default card
