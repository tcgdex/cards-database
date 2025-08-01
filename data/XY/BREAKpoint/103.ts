import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Max Potion",
		fr: "Potion Max",
		es: "Poción Máxima",
		it: "Pozione Max",
		pt: "Poção Máxima",
		de: "Top-Trank"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez tous les dégâts de l'un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées au Pokémon choisi.",
		en: "Heal all damage from 1 of your Pokémon. If you do, discard all Energy attached to that Pokémon.",
		es: "Cura todos los puntos de daño a 1 de tus Pokémon. Si lo haces, descarta todas las Energías unidas a ese Pokémon.",
		it: "Cura uno dei tuoi Pokémon da tutti i danni. Se lo fai, scarta tutte le Energie assegnate a quel Pokémon.",
		pt: "Cure todos os danos de 1 dos seus Pokémon. Se fizer isso, descarte todas as Energias ligadas àquele Pokémon.",
		de: "Heile allen Schaden bei 1 deiner Pokémon. Wenn du das machst, lege alle an jenes Pokémon angelegten Energien auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288278
	}
}

export default card
