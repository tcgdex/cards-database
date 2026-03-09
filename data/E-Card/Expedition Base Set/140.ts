import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

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

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire et obligez-le à s'en défausser.",
		de: "Wirf eine Münze. Wähle bei 'Kopf' 1 Energiekarte, die an ein Pokémon deines Gegners angelegt ist, und lege sie auf seinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 275015,
		tcgplayer: 85221
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
