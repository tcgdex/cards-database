import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Energy Removal 2",
		'fr-fr': "Suppression d'énergie 2",
		'de-de': "Energie-Absauger 2"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.",
		'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire et obligez-le à s'en défausser.",
		'de-de': "Wirf eine Münze. Wähle bei 'Kopf' 1 Energiekarte, die an ein Pokémon deines Gegners angelegt ist, und lege sie auf seinen Ablagestapel."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85221,
				cardmarket: 275015
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85221,
				cardmarket: 275015
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Splatter",
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness or Resistance.",
			},
		},
	],
}

export default card
