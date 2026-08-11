import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Fresh Water Set",
		'fr-fr': "Pack d'Eaux Fraîches",
		'es-es': "Lote de Agua Fresca",
		'it-it': "Set di Acqua Fresca",
		'pt-br': "Conjunto de Água Fresca",
		'de-de': "Tafelwasserpack"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon.",
		'en-us': "Heal 20 damage from each of your Pokémon.",
		'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon.",
		'it-it': "Cura ciascuno dei tuoi Pokémon da 20 danni.",
		'pt-br': "Cure 20 de danos de cada um dos seus Pokémon.",
		'de-de': "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 273660,
		tcgplayer: 96027
	}
}

export default card
