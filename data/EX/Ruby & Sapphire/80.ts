import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Energy Removal 2",
		fr: "Suppression d'énergie 2",
		de: "Energie-Absauger 2"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à un des Pokémon de votre adversaire et défaussez-la.",
		de: "Wirf eine Münze. Wähle bei 'Kopf' 1 Energiekarte, die an ein Pokémon deines Gegners angelegt ist, und lege sie auf seinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 275728
	}
}

export default card
