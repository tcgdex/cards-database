import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Water Cube 01",
		fr: "Suppression d'énergie 2",
		de: "Energie-Absauger 2"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Water Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Water Cube 01.",
		fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire et obligez-le à s'en défausser.",
		de: "Wirf eine Münze. Wähle bei 'Kopf' 1 Energiekarte, die an ein Pokémon deines Gegners angelegt ist, und lege sie auf seinen Ablagestapel."
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
		}
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splatter",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness or Resistance.",
			},
		},
	],,
}

export default card
