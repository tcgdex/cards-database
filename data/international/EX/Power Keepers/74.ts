import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Energy Removal 2",
		'fr-fr': "Suppression d'Énergie 2",
		'de-de': "Energie-Absauger 2"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.",
		'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		'de-de': "Wirf 1 Münze. Wähle bei \"Kopf\" 1 Energiekarte, die an 1 Pokémon deines Gegners angelegt ist, und lege sie auf seinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277380,
		tcgplayer: 85224
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		}
	]
}

export default card
