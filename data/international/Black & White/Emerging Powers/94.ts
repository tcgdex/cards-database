import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Max Potion",
		'fr-fr': "Potion Max",
		'es-es': "Máxima Poción",
		'it-it': "Pozione Max",
		'pt-br': "Poção Máxima",
		'de-de': "Top-Trank"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez tous les dégâts de l’un de vos Pokémon. Ensuite, défaussez toutes les Énergies attachées au Pokémon choisi.",
		'en-us': "Heal all damage from 1 of your Pokémon. Then, discard all Energy attached to that Pokémon.",
		'es-es': "Cura todos los puntos de daño a 1 de tus Pokémon. Después, descarta todas las Energías unidas a ese Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da tutti i danni. Poi scarta tutta l’Energia assegnata a quel Pokémon.",
		'pt-br': "Cure todos os danos de 1 dos seus Pokémon. Em seguida, descarte toda a Energia ligada a este Pokémon.",
		'de-de': "Heile allen Schaden bei 1 deiner Pokémon. Lege alle Energien, die an das Pokémon angelegt sind, auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280059,
		tcgplayer: 87266
	}
}

export default card
