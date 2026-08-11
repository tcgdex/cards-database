import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Max Potion",
		'fr-fr': "Potion Max",
		'es-es': "Poción Máxima",
		'it-it': "Pozione Max",
		'pt-br': "Poção Máxima",
		'de-de': "Top-Trank"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées au Pokémon choisi.",
		'en-us': "Heal all damage from 1 of your Pokémon. If you do, discard all Energy attached to that Pokémon.",
		'es-es': "Cura todos los puntos de daño a 1 de tus Pokémon. Si lo haces, descarta todas las Energías unidas a ese Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da tutti i danni. Se lo fai, scarta tutte le Energie assegnate a quel Pokémon.",
		'pt-br': "Cure todos os danos de 1 dos seus Pokémon. Se fizer isso, descarte todas as Energias ligadas àquele Pokémon.",
		'de-de': "Heile allen Schaden bei 1 deiner Pokémon. Wenn du das machst, lege alle an jenes Pokémon angelegten Energien auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288278,
		tcgplayer: 111634
	}
}

export default card
