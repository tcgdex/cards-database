import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Gardenia",
		'fr-fr': "Flo",
		'es-es': "Gardenia",
		'it-it': "Gardenia",
		'pt-br': "Gardênia",
		'de-de': "Silvana"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 80 dégâts à l’un de vos Pokémon auquel de l’Énergie Grass est attachée.",
		'en-us': "Heal 80 damage from 1 of your Pokémon that has any Grass Energy attached to it.",
		'es-es': "Cura 80 puntos de daño a 1 de tus Pokémon que tenga alguna Energía Grass unida a él.",
		'it-it': "Cura uno dei tuoi Pokémon che abbia delle Energie Grass assegnate da 80 danni.",
		'pt-br': "Cure 80 pontos de dano de 1 dos seus Pokémon que tiver alguma Energia Grass ligada a ele.",
		'de-de': "Heile 80 Schadenspunkte bei 1 deiner Pokémon, an das mindestens 1 Grass-Energie angelegt ist."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316049,
		tcgplayer: 157741
	}
}

export default card
