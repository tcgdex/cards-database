import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Max Potion",
		fr: "Potion Max",
		es: "Máxima Poción",
		it: "Pozione Max",
		pt: "Poção Máxima",
		de: "Top-Trank"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez tous les dégâts de l’un de vos Pokémon. Ensuite, défaussez toutes les Énergies attachées au Pokémon choisi.",
		en: "Heal all damage from 1 of your Pokémon. Then, discard all Energy attached to that Pokémon.",
		es: "Cura todos los puntos de daño a 1 de tus Pokémon. Después, descarta todas las Energías unidas a ese Pokémon.",
		it: "Cura uno dei tuoi Pokémon da tutti i danni. Poi scarta tutta l’Energia assegnata a quel Pokémon.",
		pt: "Cure todos os danos de 1 dos seus Pokémon. Em seguida, descarte toda a Energia ligada a este Pokémon.",
		de: "Heile allen Schaden bei 1 deiner Pokémon. Lege alle Energien, die an das Pokémon angelegt sind, auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280059,
		tcgplayer: 87266
	}
}

export default card
