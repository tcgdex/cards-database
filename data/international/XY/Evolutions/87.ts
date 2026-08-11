import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Super Potion",
		'fr-fr': "Super Potion",
		'es-es': "Superpoción",
		'it-it': "Superpozione",
		'pt-br': "Superpoção",
		'de-de': "Supertrank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 60 dégâts à l'un de vos Pokémon. Dans ce cas, défaussez une Énergie attachée au Pokémon choisi.",
		'en-us': "Heal 60 damage from 1 of your Pokémon. If you do, discard an Energy attached to that Pokémon.",
		'es-es': "Cura 60 puntos de daño a 1 de tus Pokémon. Si lo haces, descarta 1 Energía unida a ese Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da 60 danni. Se lo fai, scarta un'Energia assegnata a quel Pokémon.",
		'pt-br': "Cure 60 de danos de 1 dos seus Pokémon. Se fizer isso, descarte uma Energia ligada àquele Pokémon.",
		'de-de': "Heile 60 Schadenspunkte bei 1 deiner Pokémon. Wenn du das machst, lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 293449,
		tcgplayer: 124100
	}
}

export default card
