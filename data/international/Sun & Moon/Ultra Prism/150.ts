import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Lana",
		'fr-fr': "Néphie",
		'es-es': "Capitana Nereida",
		'it-it': "Suiren",
		'pt-br': "Vitória",
		'de-de': "Tracy"
	},

	illustrator: "Kanako Eo",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 50 dégâts à chacun de vos Pokémon auquel de l’Énergie Water est attachée.",
		'en-us': "Heal 50 damage from each of your Pokémon that has any Water Energy attached to it.",
		'es-es': "Cura 50 puntos de daño a cada uno de tus Pokémon que tenga alguna Energía Water unida a él.",
		'it-it': "Cura ciascuno dei tuoi Pokémon che abbia delle Energie Water assegnate da 50 danni.",
		'pt-br': "Cure 50 pontos de dano de cada um dos seus Pokémon que tiver alguma Energia Water ligada a ele.",
		'de-de': "Heile 50 Schadenspunkte bei jedem deiner Pokémon, an das mindestens 1 Water-Energie angelegt ist."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316074,
		tcgplayer: 157766
	}
}

export default card
