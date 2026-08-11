import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

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
		'fr-fr': "Soignez tous les dégâts de l’un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées à ce Pokémon.",
		'en-us': "Heal all damage from 1 of your Pokémon. If you do, discard all Energy from that Pokémon.",
		'es-es': "Cura todos los puntos de daño a 1 de tus Pokémon. Si lo haces, descarta todas las Energías unidas a ese Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da tutti i danni. Se lo fai, scarta tutte le Energie assegnate a quel Pokémon.",
		'pt-br': "Cure todo o dano de 1 dos seus Pokémon. Se fizer isto, descarte todas as Energias ligadas àquele Pokémon.",
		'de-de': "Heile allen Schaden bei 1 deiner Pokémon. Wenn du das machst, lege alle Energien von jenem Pokémon auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 297580,
		tcgplayer: 131048
	}
}

export default card
